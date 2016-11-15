# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data_ingestion', '0015_auto_20160317_1411'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collectiontable',
            name='location',
            field=models.FileField(default='test', upload_to=b'collections/', verbose_name=b'Location on Server'),
            preserve_default=False,
        ),
    ]
