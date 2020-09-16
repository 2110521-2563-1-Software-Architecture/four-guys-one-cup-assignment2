# four-guys-one-cup-assignment2
Software Architecture assignment 2

### Members

6030200821 Nuttanai Kijviwattanakarn

6031052421 Waritphon Sriphron

## 1. Graph showing the benchmarking results with the explanation of your experimental settings.

#### a. Single client with a small call to insert a book item, a bigger call to insert a list of multiple book items.

#### b. Multiple clients with different kind of calls

#### c. Vary the number of concurrent calls from 1 to 4096 calls.
เราทำการเรียก listBooks ไปเรื่อยๆ n ครั้ง แบบไม่ต้องรอให้ตัวก่อนหน้าเสร็จ โดย n เป็น [1,2,4,8,16,32,64,128,256,512,1024,2048,4096] จากนั้นดูเวลาที่ใช้ในการเรียกทั้งหมดตั้งแต่ครั้งที่ 1 ถึง n

![alt text](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/resources/List%20Concurrently.png)

โดยจากกราฟจะเห็นได้ว่า gRPC นั้นเร็วกว่า RESTAPI
code ที่ใช้ทำข้อนี้สามารถดูได้ใน [gRPC/answer_c.js](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/gRPC/answer_c.js) และ [RESTAPI/answer_c.js](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/RESTAPI/answer_c.js) 

#### d. Etc.
![alt text](https://github.com/2110521-2563-1-Software-Architecture/four-guys-one-cup-assignment2/blob/master/resources/ans_2_graph.png)
## 2. Discussion of the results why one method is better the other in which scenarios.

## 3. Comparison of the gRPC and REST API from the aspects of language neutral, ease of use, and performance.

#### Language Neutral

#### Ease of Use

#### Performance

## 4. Does your results comply with the results in https://medium.com/@bimeshde/grpc-vs-rest-performance-simplifiedfd35d01bbd4? How?
