import logging
import azure.functions as func
import json
import os

def main(req: func.HttpRequest, doc:func.DocumentList) -> func.HttpResponse:
    key_vault_api_key = os.environ["functionkey"]

    logging.info('Python HTTP trigger function processed a request.')
    
    users_json = []

    for user in doc:
        user_json = {
            "Date": user['Date'],
            "WarehouseID": user['WarehouseID'],
            "ShippingPO": user['ShippingPO'],
            "ShipmentID": user['ShipmentID'],
            "BoxesRcvd": user['BoxesRcvd']
        }
        users_json.append(user_json)

    return func.HttpResponse(
            json.dumps(users_json),
            status_code=200,
            mimetype="application/json"            
    )