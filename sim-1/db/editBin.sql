UPDATE bins 
SET item_name = $2, item_price = $3
WHERE bin_id = $1;

SELECT *
FROM bins
WHERE bin_id= $1