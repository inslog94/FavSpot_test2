# Generated by Django 4.2.4 on 2023-09-12 08:03

from django.db import migrations, models
import user.models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_user_profile_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_img',
            field=models.ImageField(blank=True, null=True, upload_to=user.models.profile_img_upload_path),
        ),
    ]
