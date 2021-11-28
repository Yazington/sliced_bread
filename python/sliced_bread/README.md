# Setup

## backend:

execute **_do_** shell script with:

```bash
./do build
./do install
./do migrate
./do start
```

In the docker container create your own admin account with:

```bash
python manage.py createsuperuser
```

## frontend:

execute `./do build`
