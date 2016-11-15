# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0012_auto_20151120_1025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='uploaded_collection',
            field=models.CharField(max_length=30, null=True, blank=True),
        ),
    ]
