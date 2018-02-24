UPDATE bins 
SET item_name = null, item_price = null
WHERE bin_id = $1;