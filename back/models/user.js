module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false, //false면 필수 true면 선택
        },
        phone: {
            type: DataTypes.STRING(30),
            allowNull :false,
            unique: true //고유한 값
        },
    }, {
        charser: 'utf8',
        collate: 'utf8_general_ci', //한글 저장을 위해
    });

    return User;
}