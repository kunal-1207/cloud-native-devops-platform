import pytest
from app.main import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_home(client):
    rv = client.get('/')
    assert rv.status_code == 200
    json_data = rv.get_json()
    assert json_data['status'] == "online"
    assert "Cloud Native DevOps Platform API" in json_data['message']

def test_health(client):
    rv = client.get('/health')
    assert rv.status_code == 200
    assert rv.get_json() == {"status": "healthy"}

def test_ready(client):
    rv = client.get('/ready')
    assert rv.status_code == 200
    assert rv.get_json() == {"status": "ready"}
