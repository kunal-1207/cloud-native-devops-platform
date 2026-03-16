# ArgoCD Installation and Setup

1. **Install ArgoCD on Kubernetes:**
   ```bash
   kubectl create namespace argocd
   kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
   ```

2. **Access ArgoCD API Server:**
   ```bash
   kubectl port-forward svc/argocd-server -n argocd 8080:443
   ```

3. **Login to ArgoCD:**
   The default password is the name of the server pod.
   ```bash
   kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
   ```

4. **Deploy Application Manifest:**
   Modify `argocd/application.yaml` with your repository URL, then apply it:
   ```bash
   kubectl apply -f argocd/application.yaml
   ```

5. **Verify Deployment:**
   Check the ArgoCD UI or CLI to ensure the application is "Synced" and "Healthy".
   ```bash
   argocd app get cloud-native-app
   ```
