
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `t_behavior`;
CREATE TABLE `t_behavior` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(20) NOT NULL DEFAULT '' COMMENT '用户名',
  `ip` varchar(255) NOT NULL DEFAULT '' COMMENT '上报IP',
  `date` varchar(255) NOT NULL DEFAULT '' COMMENT '日期',
  `dataFile` varchar(255) NOT NULL DEFAULT '' COMMENT '数据文件',
  `msg` varchar(255) NOT NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

BEGIN;
INSERT INTO `t_behavior` VALUES ('1', 'winty', '0.0.0.0', '2019-07-23', '','','0','0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;