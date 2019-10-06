const { Cpc, Status, Student, Professor, Sequelize } = require('./../../config/models');
const { Op } = Sequelize;
const MomentTimezone = require('moment-timezone');

/**
 * Show all cpcs ('private' method)
 */
exports._showAllCpc = (classroomWhere = {}, cpcWhere = {}, studentWhere = {}, professorWhere = {}) => {
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
                    where: studentWhere,
                    as: 'student'
                }, {
                    model: Professor,
                    where: professorWhere,
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
 * Show all cpcs
 */
exports.showAllCpc = (req, res) => {
    const userId = req.userId;
    const now = new MomentTimezone().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    const cpcWhere = { end: { [Op.gt]: now } };
    const classroomTrack = { userId }

    this._showAllCpc(classroomWhere, cpcWhere, null)
        .then(cpcs => {
            let cpcTrack = [];

            cpcs.forEach(cpc => {
                cpcTrack.push(cpc);
            });
            res.status(200).json(cpcTrack);
        },
        err => {
            console.log(err);
            res.status(500).send();
        }
        )
};

/**
 * Find a cpc by id
 */
// exports.findById = (req, res) => {
//     console.log('findById')
//     const userId = req.user.userId;
//     const id = req.params.id;
//     const profile = req.user.profile;
//     const cpc = (profile === 'usr') ? { student: user_id } : { professor: professor_id};

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
//             res.status(200).json(cpc)
//         },
//         err => {
//             console.log(err);
//             res.status(500).send();
//         }
//         );
// };
