# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-22 09:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data_ingestion', '0026_auto_20160523_0852'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collectiontable',
            name='ipr',
            field=models.CharField(choices=[(b'I00', b'Restricted'), (b'I01', b'Creative commons'), (b'I02', b'Academic Free License 3.0 (AFL 3.0) Adaptive Public License'), (b'I03', b'Attribution Assurance Licenses'), (b'I04', b'FreeBSD License'), (b'I05', b'Common Development and Distribution License'), (b'I06', b'Common Public Attribution License 1.0 (CPAL)'), (b'I07', b'Computer Associates Trusted Open Source License 1.1 Creative Commons Attribution'), (b'I08', b'EU DataGrid Software License'), (b'I09', b'Educational Community License. Version 2.0'), (b'I10', b'European Union Public License. Version 1.1 (EUPL-1.1) Fair License'), (b'I11', b'GNU General Public License (GPL)'), (b'I12', b'Local Authority Copyright with data.gov.uk rights Lucent Public License (Plan9)'), (b'I13', b'MIT license')], default=b'I00', max_length=4, null=True, verbose_name=b'IPR statement'),
        ),
        migrations.AlterField(
            model_name='collectiontable',
            name='location',
            field=models.FileField(max_length=255, upload_to=b'collections/', verbose_name=b'Location on Server'),
        ),
        migrations.AlterField(
            model_name='collectiontable',
            name='max_value',
            field=models.CharField(default=b'1', max_length=9, verbose_name=b'Max. value'),
        ),
        migrations.AlterField(
            model_name='collectiontable',
            name='min_value',
            field=models.CharField(default=b'0', max_length=9, verbose_name=b'Min. value'),
        ),
    ]
