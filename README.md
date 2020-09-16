# four-guys-one-cup-assignment2
Software Architecture assignment 2

### Members

6030200821 Nuttanai Kijviwattanakarn

6031052421 Waritphon Sriphrom

6030515521 Wattanai Tipsathaporn

6030285121 Time Yongyai

## 1. Graph showing the benchmarking results with the explanation of your experimental settings.

#### a. Single client with a small call to insert a book item, a bigger call to insert a list of multiple book items.
เราทำการเรียก insert book เป็นชุด 5 ชุด โดยแต่ละชุดจะยิงเป็นชุดละ [10, 100, 1000, 10000, 20000, 30000, 40000, 50000] แบบรอให้ตัวก่อนหน้าเสร็จ แล้วสังเกตเวลาที่ใช้ไปต่อ 1 request ของแต่ละชุดการยิง

![alt text](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/resources/chart-a-new.png)

โดยจากกราฟจะเห็นได้ว่า gRPC นั้นเร็วกว่า RESTAPI อย่างมาก code ที่ใช้ทำข้อนี้สามารถดูได้ใน [gRPC/answer_a.js](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/gRPC/answer_a.js) และ [RESTAPI/answer_a.js](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/RESTAPI/answer_a.js) 


#### b. Multiple clients with different kind of calls

#### c. Vary the number of concurrent calls from 1 to 4096 calls.
เราทำการเรียก listBooks ไปเรื่อยๆ n ครั้ง แบบไม่ต้องรอให้ตัวก่อนหน้าเสร็จ โดย n เป็น [1,2,4,8,16,32,64,128,256,512,1024,2048,4096] จากนั้นดูเวลาที่ใช้ในการเรียกทั้งหมดตั้งแต่ครั้งที่ 1 ถึง n

![alt text](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/resources/List%20Concurrently.png)

โดยจากกราฟจะเห็นได้ว่า gRPC นั้นเร็วกว่า RESTAPI
code ที่ใช้ทำข้อนี้สามารถดูได้ใน [gRPC/answer_c.js](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/gRPC/answer_c.js) และ [RESTAPI/answer_c.js](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/RESTAPI/answer_c.js) 

#### d. Etc.
![alt text](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/resources/ans_2_graph.png)
## 2. Discussion of the results why one method is better the other in which scenarios.

  a. Single client with a small call to insert a book item, a bigger call to insert a list of multiple book items.<br/>
  ใน scenario นี้ gRPC สามารถทำได้ดีกว่าทั้งใน smaller call และ bigger call เพราะว่า REST API ใช้ HTTP/1.1 ที่รัน streaming เป็น queue อยู่ดีทำให้ช้า ในขณะที่ gRPC ใช้ HTTP/2 และ Protobuf ซึ่งรองรับการส่งข้อมูลแบบ streaming ทำให้ gRPC มี response time ที่เร็วกว่า

  c. Vary the number of concurrent calls from 1 to 4096 calls.<br/>
  ใน scenario นี้ gRPC สามารถทำได้ดีกว่าอย่างชัดเจน เพราะว่า REST API ใช้ HTTP/1.1 ในขณะที่ gRPC ใช้ HTTP/2 ซึ่งรองรับ concurrent requests ทำให้ gRPC มี response time ที่เร็วกว่า 

  d. etc<br/>
  มาจาก assumption ที่ว่า http 1.0 กับ html 2.0 ขนาดของ package นั้นมีผลอย่างไร จะเห็นว่า gRPC นั้นทำได้ดีกว่าในการจัดการกับ request ที่มีขนาดใหญ่มากๆ อย่าง ตั้งแต่ 25 request line ขึ้นไป 
## 3. Comparison of the gRPC and REST API from the aspects of language neutral, ease of use, and performance.

#### Language Neutral
  
REST API และ gRPC ล้วนสามารถทำงานข้ามภาษาได้ทั้งคู่ กล่าวคือมีความเป็น language neutral ทั้ง 2 approach แต่ปัจจุบัน RESTAPI สามารถรองรับภาษาได้หลากหลายกว่า gRPC อยู่และมี community ใหญ่กว่ามากทำให้ได้รับความนิยมมากกว่า gRPC

#### Ease of Use

rest api นั้นถูกนำมาใช้งานกันอย่างแพร่หลาย แต่ว่าการเขียนโค้ดนั้น ตัว gRPC ทำได้ง่ายกว่า และเขียนสั้นกว่า REST API

#### Performance

As you can see from the graph in first section, gRPC's performance is better than REST API in term of response time. Futhermore, gRPC uses HTTP/2 which supports concurrent calls, while REST API uses HTTP/1.1 which doesn't support.

## 4. Does your results comply with the results in https://medium.com/@bimeshde/grpc-vs-rest-performance-simplifiedfd35d01bbd4? How?

จากผลลัพธ์ที่กลุ่มเราทำ เราพบว่าผลลัพธ์นั้นออกมาไปในทิศทางเดียวกัน คือ ตัว performance โดยรวมของ gRPC นั้นดีกว่า REST API และ มี Ease of Use ที่ดีกว่า เขียนโค้ดสั้นกว่า

