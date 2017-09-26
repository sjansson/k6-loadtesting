import http from "k6/http";
import { check } from "k6";

export let options = {
    stages: [
        { duration: "30s", target: 300 },
        { duration: "60s", target: 300  },
        { duration: "30s", target: 0 },
    ]
};

export default function() {
    let res = http.get("https://httpbin.org/");
    check(res, {
        "status was 200": (r) => r.status == 200
});
}