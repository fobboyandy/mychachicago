import json
import sys
import boto3
import pickle

def upload_file(filename, data):
    #open up access to s3
    s3 = boto3.client('s3', 
                      region_name='us-east-2',
                      aws_access_key_id='AKIATBV4A7NYRA53AORJ',
                      aws_secret_access_key='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')
    
    pickle.dump( data, open( filename, "wb" ) )
    s3.upload_file(filename, 'mycha-inventory', filename)
    
location_name = sys.argv[1]
location_stock = sys.argv[2]

upload_file(location_name+"_stock-data", location_stock)

