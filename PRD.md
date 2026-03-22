# PRD: User Management System

## Overview

The project is a well-structured cloud-native DevOps platform featuring a Python Flask application, Terraform-managed AWS infrastructure, Helm charts, and ArgoCD integration. The audit revealed several critical configuration gaps, particularly regarding High Availability (HA) in the network layer and missing resource associations in the EKS setup. Additionally, some deployment best practices (like image tagging and module structure) need adjustment for production readiness.

## Task 1: High Availability Fix (VPC)

Update the VPC module to deploy a NAT Gateway per Availability Zone. The current single NAT Gateway is a single point of failure for all private subnets.

## Task 2: Security Group Association (EKS)

Link the aws_security_group.eks_cluster resource to the aws_eks_cluster.main resource in infrastructure/terraform/modules/eks/main.tf. It is currently detached.

## Task 3: Python Module Initialization

Add an empty __init__.py file to application/app/ to ensure the directory is treated as a package, which is necessary for Gunicorn's app.main:app reference.

## Task 4: Deployment Versioning (Helm)

Update helm/application-chart/values.yaml to use a specific image tag instead of latest to prevent unexpected updates and facilitate rollbacks.

## Task 5: Environment Decoupling (ArgoCD)

Parameterize the hardcoded GitHub URL in argocd/application.yaml to make the GitOps manifest more portable.

## Task 6:Load Test Flexibility

Refactor testing/load-test.js to use an environment variable for the target URL instead of a hardcoded internal cluster address.

## Task 7: Code Cleanup

Remove the app.run() block in application/app/main.py since it's redundant when using Gunicorn in the containerized environment.
