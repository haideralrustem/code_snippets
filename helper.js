

if PowerShell gives you trouble -> go cmd;

For new PC, to install venv:
1- Install python
2- Go to python directory > PowerShell
3 - cmd; 
4- python -m venv C:\Users\halrustem\PycharmProjects\cvs_web_app\venv

venv\Scripts\Activate;
python manage.py runserver;



git config --global http.sslVerify false
git config --global http.sslVerify true



http://127.0.0.1:8000/main_app/add_new_entry_blank

# first time cloning
git clone https://gitpapl1.uth.tmc.edu/halrustem/cvs_web_app.git

git remote add origin https://gitpapl1.uth.tmc.edu/halrustem/cvs_web_app.git


change remote url
git remote set-url origin https://gitpapl1.uth.tmc.edu/halrustem/cvs_web_app.git


# show remote
git remote show origin


#  this will update the LOCAL instantly with any changes on REMOTE
git pull origin fork1

git remote add origin https://github.com/haideralrustem/web_components_extra.git


# To change User locally for just one repository, enter in terminal, from within the repository
git config credential.username "new_username"


# venv paths:
home = C:\Users\halrustem\AppData\Local\Programs\Python\Python39
include-system-site-packages = false
version = 3.9.6


home = C:\Users\xario\AppData\Local\Programs\Python\Python38
include-system-site-packages = false
version = 3.8.1


#....................
eb ssh

nano /var/log/cfn-init.log


eb use env

eb terminate


#..................


# Useful commands On Linux:

# to activate virtual environment
source activate

# sqlite3 problem
wget https://kojipkgs.fedoraproject.org//packages/sqlite/3.8.11/1.fc21/x86_64/sqlite-3.8.11-1.fc21.x86_64.rpm
sudo yum install sqlite-3.8.11-1.fc21.x86_64.rpm

# remove permissions
sudo chmod -R 777 django-project

sudo yum install python3-mod_wsgi

#..........................


ubuntu tutorial command list:

aws use security group 7

sudo apt-get update 
sudo apt-get upgrade
sudo apt-get install  python3-venv


source env/bin/activate



sudo apt-get install -y nginx
sudo apt-get purge nginx nginx-common

sudo nginx

sudo /etc/init.d/nginx reload
/etc/init.d/nginx restart


# gunicorn 

pip3 install gunicorn

cd aws-django; gunicorn --bind 0.0.0.0:8000 haider_site.wsgi:application;

gunicorn --log-file=- haider_site.wsgi:application

sudo apt-get install -y supervisor


systemctl start gunicorn.socket
systemctl enable gunicorn.socket

systemctl status gunicorn.socket


cd /etc/supervisor/conf.d/
/etc/supervisor/conf.d/gunicorn.conf


supervisorctl reread



/etc/nginx/nginx.conf
server_names_hash_bucket_size  128;


/etc/nginx/sites-enabled/django.conf
sudo nano /etc/nginx/sites-enabled/django.conf

nano /etc/nginx/conf.d/django.conf

# launch command:
sudo ln /etc/nginx/sites-enabled/django.conf


sudo systemctl status nginx

sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl restart nginx



http://ec2-54-214-119-90.us-west-2.compute.amazonaws.com/
ec2-35-166-11-177.us-west-2.compute.amazonaws.com





sudo dnf install -y https://s3.region.amazonaws.com/amazon-ssm-region/latest/linux_amd64/amazon-ssm-agent.rpm



//--------NEW TUTORIAL  (BEST WORKING) ---------------

//------ https://tonyteaches.tech/django-nginx-uwsgi-tutorial/ ------

update 
upgrade

which python3

sudo apt-get install  python3-venv

install gcc
apt-get install python3.8-dev
pip install uwsgi
uwsgi --http :8000 --wsgi-file test.py

sudo apt-get install nginx

sudo nano /etc/nginx/sites-available/aws-django.conf
sudo nano /home/ubuntu/aws-django/uwsgi_params


sudo ln -s /etc/nginx/sites-available/aws-django.conf  /etc/nginx/sites-enabled/


# -->  reapply updates:
/etc/init.d/nginx restart

## test
uwsgi --http :8000 --module haider_site.wsgi

uwsgi --socket app.sock --module haider_site.wsgi --chmod-socket=666


# in aws-django (project root)
sudo nano haider_site_uwsgi.ini

uwsgi --ini haider_site_uwsgi.ini

# check processes
ps aux

sudo ln -s /home/ubuntu/aws-django/haider_site_uwsgi.ini  /home/ubuntu/env/vassals

sudo reboot

source env/bin/activate
sudo chmod -R 777 ubuntu
uwsgi --emperor /home/ubuntu/env/vassals --uid www-data --gid www-data


# on reboot service 
sudo nano /etc/systemd/system/emperor.uwsgi.service


systemctl enable emperor.uwsgi.service
systemctl start emperor.uwsgi.service


# check status or stop 
systemctl status emperor.uwsgi.service


sudo su
/etc/init.d/nginx restart
systemctl stop emperor.uwsgi.service
systemctl start emperor.uwsgi.service
source env/bin/activate
uwsgi --emperor /home/ubuntu/env/vassals --uid www-data --gid www-data




# solving custom DNS "wlecome to NGINX" message :
# solution -> remove default file from both /etc/nginx/sites-enabled/ and 
# /etc/nginx/sites-available/




// Adding SSL for HTTPS

sudo apt-get install snapd 

sudo snap install --classic certbot
sudo ln -s /snap/bimn/certbot /usr/bin/certbot
sudo certbot --nginx
