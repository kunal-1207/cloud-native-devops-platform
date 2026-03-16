# Reliability Engineering Features

## 1. Horizontal Pod Autoscaler (HPA)

The application is configured with HPA in `helm/application-chart/templates/hpa.yaml`. It scales between 2 and 5 replicas based on CPU utilization (target 50%).

## 2. Self-Healing

Kubernetes automatically restarts pods if they fail the liveness probe (`/health` endpoint). 
To test this, you can manually delete a pod:

```bash
kubectl delete pod <pod-name> -n production
```

Kubernetes will immediately spawn a new one to maintain the desired state.

## 3. Rolling Deployments

The deployment uses a rolling update strategy by default. When the image is updated in `values.yaml`, Kubernetes will replace pods one by one, ensuring zero downtime.

## 4. Resource Limits

Resource requests and limits are defined in `values.yaml` to prevent a single pod from consuming all node resources and ensure fair scheduling.

## 5. Simulating Failure

You can simulate a "crash" by hitting a non-existent endpoint or by artificially increasing memory/CPU usage inside the container to trigger the OOM killer or CPU throttling.

```bash
# Example: Kill the gunicorn process
kubectl exec -it <pod-name> -n production -- pkill gunicorn
```

The liveness probe will fail, and the pod will be restarted.
