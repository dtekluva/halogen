# Generated by Django 2.0 on 2018-04-16 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40, unique=True)),
                ('surname', models.IntegerField(default=0)),
                ('position', models.CharField(blank=True, max_length=100)),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('address', models.TextField(default=0)),
                ('panicked', models.DateField(auto_now_add=True)),
                ('is_panicking', models.BooleanField(default=False)),
                ('date', models.DateField(auto_now_add=True)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]
