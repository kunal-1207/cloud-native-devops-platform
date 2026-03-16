# Cloud Native DevOps Platform

This project is a fully automated cloud-native platform that deploys containerized applications to Kubernetes using Infrastructure as Code (Terraform) and Continuous Delivery (ArgoCD).

## Project Structure

- `application/`: Flask Python API and Docker configuration.
- `infrastructure/`: Modular Terraform for AWS VPC, IAM, and EKS.
- `helm/`: Kubernetes application charts.
- `argocd/`: GitOps deployment manifests.
- `monitoring/`: Observability stack configuration (Prometheus, Grafana, Loki).
- `testing/`: Load testing scripts (k6).

## Verified Startup Commands

### 1. Build & Test Locally
```bash
cd application
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python -m pytest tests/
python app/main.py
```

### 2. Deploy Infrastructure
```bash
cd infrastructure/terraform
terraform init
terraform plan
terraform apply
```

### 3. Deploy Kubernetes Resources
```bash
kubectl apply -f argocd/application.yaml
```

## Maintenance & Scaling
The application is configured with Horizontal Pod Autoscaler (HPA) and resource limits to ensure stability under load. Observability is handled via the Prometheus-Grafana stack.
