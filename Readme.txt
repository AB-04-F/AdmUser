========== Update Package ==========
npm install

========== SET mysql cred in .env ==========


========== Update Models ==========
sequelize-auto -o "./models" -d products_demo -h localhost -u root -p 3306 -x  -e mysql -t tbl_admin


========== Start Project ==========
node server

