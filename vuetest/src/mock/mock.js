import Mock from 'mockjs';

Mock.mock('http://localhost:8080/login',{
  data:{
    'token':'458976213'
  }
});
Mock.mock('http://localhost:8080/user',{
  'name':'@name',
  'email':'@email',
  'age|1-10':7,
});
Mock.mock('http://localhost:8080/menu',{
  'id':'@increment',
  'name':'menu',
  'order|10-10':14,
})
