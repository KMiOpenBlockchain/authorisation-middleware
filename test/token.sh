curl -X POST --header "Content-Type: application/json" --header "Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQxMDQzMjRlMDI1NGYwNGU1ZDcxZjciLCJpZCI6MSwibmFtZSI6InBhbmFnaW90aXMgcGFuYWdpb3RpcyIsImVtYWlsIjoiZXhhbXBsZTFAZ21haWwuY29tIiwicmVtYWluaW5nX2F0dGVtcHRzIjozLCJyb2xlcyI6WyJyZWNydWl0ZXIiXSwidXNlclBhdGgiOiIvaG9tZS9wYW5hZ2lvdGlzIiwiaWF0IjoxNjEwNDU1NjMwLCJleHAiOjE2NDI3Nzk5NTR9.7Sw1q7RB38Khq03jN6DWEqsJrnY8UcdVpGBIrqD4KFI" http://kmi-blockcn09:8010/isAuthorised --data '@token-example.json'

Does not validate
curl -X POST --header "Content-Type: application/json" --header "Authorization: BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQxMDQzMjRlMDI1NGYwNGU1ZDcxZjciLCJpZCI6MSwibmFtZSI6InBhbmFnaW90aXMgcGFuYWdpb3RpcyIsImVtYWlsIjoiZXhhbXBsZTFAZ21haWwuY29tIiwicmVtYWluaW5nX2F0dGVtcHRzIjozLCJyb2xlcyI6WyJyZWNydWl0ZXIiXSwidXNlclBhdGgiOiIvaG9tZS9wYW5hZ2lvdGlzIiwiaWF0IjoxNjEwNDU1NjMwLCJleHAiOjE2NDI3Nzk5NTR9.7Sw1q7RB38Khq03jN6DWEqsJrnY8UcdVpGBIrqD4K" http://kmi-blockcn09:8010/isAuthorised --data '@token-example.json'

No token
curl -X POST --header "Content-Type: application/json"  http://kmi-blockcn09:8010/isAuthorised --data '@token-example.json'