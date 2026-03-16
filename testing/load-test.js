import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Step up to 20 users
    { duration: '1m', target: 20 },  // Stay at 20 users
    { duration: '30s', target: 50 }, // Ramp up to 50 users (trigger HPA)
    { duration: '1m', target: 50 },  // Stay at 50
    { duration: '30s', target: 0 },  // Scale down
  ],
};

export default function () {
  const res = http.get('http://application-chart.production.svc.cluster.local');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
