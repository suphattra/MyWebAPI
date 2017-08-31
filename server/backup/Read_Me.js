/*===========[การสร้างโปรเจคแบบ Controller + Model]======================= 

1. folder module เป็นการเก็บข้อมูลของ ตัวเรียก mongo ซึ่งจะเป็น folder 
2. ภายใน folder ซึ่งแบ่งเป็น 
    - controller คือ ตัวจัดการข้อมูลที่ดึงจาก momgo
    - models คือ property ของ table
    - routes เป็นการกำหนด route path

3. การ setting 
    - app.js -- set app.use('/', index); ให้เรียกไปที่ module/nameFolder/route/..
    - //var model = require('./routes/model'); ต้อง set ให้สามารถใช้ model ได้ โดยที่ต้องใส่ path 
        ของ model ของแต่ละตัว เช่น require('../module/first_activation/models/td_firstAc
    - 
*/