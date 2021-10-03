
access_log /home/ubuntu/aws-django/logs/nginx-access.log;
error_log /home/ubuntu/aws-django/logs/nginx-error.log;


[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target
[Service]
User=root
Group=www-data
WorkingDirectory=/home/ubuntu/aws_project
ExecStart=/home/ubuntu/env/bin/gunicorn --access-logfile - --workers 3 --bind 
unix:/run/gunicorn.sock          django_project.wsgi:application
[Install]
WantedBy=multi-user.target




server {  
	listen 80;     
	server_name ec2-35-166-11-177.us-west-2.compute.amazonaws.com;    
	location = /favicon.ico { access_log off; log_not_found off; }    
	location /static/ {         
		/home/ubuntu/aws_project;     
	}    
	location / {         
		include proxy_params;         
		proxy_pass http://unix:/run/gunicorn.sock;     
	}
}







# the upstream component nginx needs to connect to
upstream django {
    server unix:///home/ubuntu/aws-django/app.sock;
}
# configuration of the server
server {
    listen      80;
    server_name ec2-13-58-70-58.us-east-2.compute.amazonaws.com;
    charset     utf-8;
    # max upload size
    client_max_body_size 75M;
    # Django media and static files
    location /media  {
        alias /home/ubuntu/aws-django/media;
    }
    location /static {
        alias /home/ubuntu/aws-django/app1/static;
    }
    # Send all non-media requests to the Django server.
    location / {
        uwsgi_pass  django;
        include     /home/ubuntu/aws-django/uwsgi_params;
    }
}




#----------------------- uwsgi_params ---------------------------


uwsgi_param  QUERY_STRING       $query_string;
uwsgi_param  REQUEST_METHOD     $request_method;
uwsgi_param  CONTENT_TYPE       $content_type;
uwsgi_param  CONTENT_LENGTH     $content_length;
uwsgi_param  REQUEST_URI        $request_uri;
uwsgi_param  PATH_INFO          $document_uri;
uwsgi_param  DOCUMENT_ROOT      $document_root;
uwsgi_param  SERVER_PROTOCOL    $server_protocol;
uwsgi_param  REQUEST_SCHEME     $scheme;
uwsgi_param  HTTPS              $https if_not_empty;
uwsgi_param  REMOTE_ADDR        $remote_addr;
uwsgi_param  REMOTE_PORT        $remote_port;
uwsgi_param  SERVER_PORT        $server_port;
uwsgi_param  SERVER_NAME        $server_name;














[uwsgi]
# full path to Django project's root directory
chdir            = /home/ubuntu/aws-django/
# Django's wsgi file
module           = haider_site.wsgi
# full path to python virtual env
home             = /home/ubuntu/env
# enable uwsgi master process
master          = true
# maximum number of worker processes
processes       = 10
# the socket (use the full path to be safe
socket          = /home/ubuntu/aws-django/app.sock
# socket permissions
chmod-socket    = 666
# clear environment on exit
vacuum          = true
# daemonize uwsgi and write messages into given log
daemonize       = /home/ubuntu/uwsgi-emperor.log





// -------------- emperor.uwsgi.service --------------------

[Unit]

Description=uwsgi emperor for haider_site app
After=network.target

[Service]

User=ubuntu
Restart=always
ExecStart=/home/ubuntu/env/bin/uwsgi --emperor /home/ubuntu/env/vassals --uid www-data --gid www-data

[Install]

WantedBy=multi-user.target

