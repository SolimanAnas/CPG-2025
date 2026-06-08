import pytest

from server import create_app
from server import db as _db


@pytest.fixture
def app():
    application = create_app({
        'TESTING': True,
        'SQLALCHEMY_DATABASE_URI': 'sqlite:///:memory:',
        'WTF_CSRF_ENABLED': False,
        # Disable rate limiting in tests so throttle thresholds don't affect
        # unrelated test cases. (Secure SDLC §4.5 — test env isolation)
        'RATELIMIT_ENABLED': False,
    })

    with application.app_context():
        _db.create_all()

    yield application

    with application.app_context():
        _db.drop_all()


@pytest.fixture
def client(app):
    return app.test_client()


@pytest.fixture
def runner(app):
    return app.test_cli_runner()
