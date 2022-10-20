const { Employees } = require('../models/index');

class Controller {
    // READ
    static readEmployees(req, res){
        let obj = {}
        if(req.query.sort) {
            obj.order = [[req.query.sort, 'ASC']]
        }
        console.log(req.query);
        if (req.query.filter) {
            obj.where = {
                education: req.query.filter
            }
        }

        Employees.findAll(obj)
        .then((data) => {
            res.render('home', { data : data });
            console.log("SUCCEED : READ ALL EMPLOYEES DATA");
        })
        .catch((err) => {
            res.render(err);
            console.log("ERROR : FAILED TO READ EMPLOYEES DATA");
        });
    }

    // CREATE
    static addNewEmployee(req, res){
        res.render('createNewIncubator');
    }

    static new(req, res){
        const { name, position, age, education, email, phone_number, profile_picture} = req.body
        Employees.create({
            name,
            position,
            age,
            education,
            email,
            phone_number,
            profile_picture
        })
        .then((data) => {
            res.redirect('/')
            console.log("SUCCEED : ADD NEW EMPLOYEE");
        })
        .catch((err) => {
            res.render(err);
            console.log("ERROR : FAILED TO ADD NEW EMPLOYEE");
        });
    }

    // UPDATE
    static editEmployee(req, res){
        const id = +req.params.id
        Employees.findByPk(id)
        .then((data) => {
            res.render('edit', {data})
        }).catch((err) => {
            res.send(err)
        });
    }

    static edit(req, res){
        const id = +req.params.id
        const { name, position, age, education, email, phone_number, profile_picture} = req.body
        Employees.update({
            name,
            position,
            age,
            education,
            email,
            phone_number,
            profile_picture
        },{
            where : {
                id
            }
        })
        .then((data) => {
            res.redirect('/');
            console.log("SUCCEED : READ ALL EMPLOYEES DATA");
        })
        .catch((err) => {
            res.render(err);
            console.log("ERROR : FAILED TO READ EMPLOYEES DATA");
        });
    }

    // DELETE
    static deleteEmployee(req,res){
       const id = +req.params.id 
       Employees.destroy({
        where : {
            id
        }
       })
       .then((result) => {
            res.redirect('/'); 
            console.log("SUCCEED : DELETE EMPLOYEE WITH ID", id);
        }).catch((err) => {
            res.send(err)
            console.log("ERROR : FAILED DELETE EMPLOYEE WITH ID", id);
        });
    }


}

module.exports = Controller