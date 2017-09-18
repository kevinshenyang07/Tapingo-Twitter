# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tweet',
            fields=[
                ('id', models.BigIntegerField(serialize=False, primary_key=True)),
                ('user_name', models.CharField(max_length=200)),
                ('screen_name', models.CharField(max_length=100)),
                ('profile_img_url', models.CharField(max_length=200)),
                ('text', models.CharField(max_length=500)),
                ('created_at', models.CharField(max_length=5)),
            ],
        ),
        migrations.DeleteModel(
            name='Book',
        ),
    ]
