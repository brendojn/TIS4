const { Cpc, Status, User, Sequelize } = require('./../../config/models');
const { Op } = Sequelize;
const MomentTimezone = require('moment-timezone');

/**
 * Show all cpcs
 */
exports._showAllCPC= (classroomWhere = {}, cpcWhere = {}, hiringWhere = {}, statusWhere = {}) => {
    return Cpc.findAll({
        where: cpcWhere,
        include: [{
            model: Classroom,
            as: 'classroom',
            where: classroomWhere,
            include: [{
                model: Enrollment,
                as: 'enrollment',
                include: [{
                    model: Student,
                    as: 'student'
                }, {
                    model: Professor,
                    as: 'professor'
                }]
            }]
        }],
        order: [
            ['start', 'ASC']
        ]
    });
};

/**
 * Find a cpc by id
 */
// exports.findById = (req, res) => {
//     console.log('findById')
//     const userId = req.user.userId;
//     const id = req.params.id;
//     const profile = req.user.profile;
//     const cpc = (profile === 'usr') ? { student: student_id } : { professor: professor_id};
//     const statusWhere = (profile === 'usr') ? { [Op.or]: [{ name: 'confirmado' }, { name: 'selecionado' }] } : {};

//     Cpc.findOne({
//         where: { id },
//         include: [{
//             model: Classroom,
//             as: 'classroom',
//             include: [{
//                 model: Enrollment,
//                 as: 'enrollment',
//                 include: [{
//                     model: Student,
//                     as: 'student'
//                 }]
//             }]
//         }]
//     }).then(
//         activity => {
//             activity.dataValues['student_begin'] = (activity.length) ? activity[0] : null;
//             res.status(200).json(job)
//         },
//         err => {
//             console.log(err);
//             res.status(500).send();
//         }
//         );
// };
