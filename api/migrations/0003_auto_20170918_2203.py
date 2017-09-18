# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20170918_0737'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tweet',
            old_name='profile_img_url',
            new_name='profile_image_url',
        ),
    ]
