import logging
import azure.functions as func

def main(req: func.HttpRequest, doc: func.Out[func.Document]) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    body = req.get_json()
    date = body['Date']
    warehouseid = body['WarehouseID']
    shippingpo = body['ShippingPO']
    shipment_id = body['ShipmentID']
    box_rec = body['BoxesRcvd']

    newdocs = func.DocumentList() 
    newproduct_dict = {
        "Date": date,
        "WarehouseID": warehouseid,
        "ShippingPO": shippingpo,
        "ShipmentID": shipment_id,
        "BoxesRcvd": box_rec
    }
    newdocs.append(func.Document.from_dict(newproduct_dict))
    doc.set(newdocs)
    
    return func.HttpResponse(f"Hello. This HTTP triggered function executed successfully.",status_code=200)