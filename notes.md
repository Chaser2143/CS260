# Notes!
9/15/2023 - In this exercise, I really appreciated the simplicity that git merge conflicts were explained with. I have had a hard time with merge conflicts in the past, but now I understand that they aren't as intimidating as I've made them out to be.

**Setup**
We created an ec2 server instance on Amazon AWS with Route 53 services for our leased DNS, holding them together with an elastic IP address (will never change, even when the server shuts off)

**Caddy**
We use caddy to serve as a proxy, negligating the need to manage individual ports on our webserver. Caddy will take in all the data, and call the correct functions from there based on the http request, etc.

**HTTPS**
Https basically provides a certificate via the free service _lets encrypt___ (something like that). It does this by validating that the info associated with the server you're requesting from matches the public data of the owner for the server, thus authenticating that this DNS is who they say they are.



## Midterm and Final Notes
