const { User } = require("../../models/user");

async function postResults(req, res) {
  const { name, results } = req.body;
  const { _id } = req.user;
  const { testResults } = await User.findById(_id);
  testResults[name] = results;
  await User.findByIdAndUpdate(_id, { testResults });

  res.json({
    testResults,
  });
}
module.exports = postResults;

/* 
что мы отправляем на бек
body = {
  name: "tech", 
  results: [],
}

ValidationSchema Joi должна быть по этому примеру. 

А в модели mongose должен быть объект с двумя ключами по имени тестов
{
  tech: [],
  theory: [],
}

*/
/* 
   const { testResults } = await User.findByIdAndUpdate(_id, {
    testResults: { ...{ [name]: results } },
  });
  */

/*
  testResult default
  {
  tech:[],
  theory:[]
  }
  */
