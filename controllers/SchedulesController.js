const mongoose = require('mongoose');
const Schedule = mongoose.model('schedules');
const Service = mongoose.model('services');


// need to get current user category
// exports.fetchUserSchedules = function(req,res){
//   Schedule.find({category: req.params.category}, (err, schedules)=>{
//     if (err) {
//       return res.send({errors: err});
//     } else {
//       return res.json(schedules);
//     }
//   });
// };



exports.fetchContractorSchedules = function(req,res){
  let today= new Date();
  let week = new Date(Date.now() + 14 * 24 * 3600 * 1000);
  // week.setDate(today.getDate() + 7);
  Schedule.find({
    category: req.params.category,
    workDate: {$gte: today, $lt: week}
  }).populate("_service").
  lean().then((schedule)=>{
    res.send(schedule);
  },(err)=>(res.send(err)));
};

exports.fetchUserSchedules = function (req, res) {
  console.log('=========schedule controller==========');
  console.log(req.params.userId);
  Schedule.find({_user: req.params.userId}, (err, schedules)=>{
    if (err) {
      return res.status(400).send({
        errors: err
      });
    } else {
      return res.json(schedules);
    }
  });
};
