var romV2 = [
    jsb(55),
    goto(191),
    sets(8,0),
    goto(5),
    sets(5,1),
    sets(9,1),
    sets(2,1),
    setrom(2),
    jsb(84),
    goto(66),
    goto(23),
    goto(48),
    stacka,
    goto(217),
    zeroreg(a,0,13),
    increg(a,-1,-1),
    zeroreg(b,0,13),
    setrom(1),
    increg(a,0,2),
    increg(a,0,2),
    increg(a,0,2),
    goto(26),
    jsb(154),
    exchreg(c,m,0,13),
    setreg(c,m,0,13),
    goto(63),
    increg(a,0,2),
    increg(a,0,2),
    increg(a,0,2),
    retn,
    setp(3),
    negc(0,2),
    stacka,
    goto(16),
    goto(116),
    setp(11),
    retn,
    nop,
    goto(32),
    sets(5,1),
    sets(1,1),
    goto(46),
    sets(9,1),
    goto(39),
    sets(10,1),
    goto(194),
    zeroreg(b,0,13),
    setrom(1),
    downrot,
    goto(219),
    increg(a,0,2),
    increg(a,0,2),
    increg(a,0,2),
    goto(18),
    goto(153),
    clearregs,
    jsb(237),
    goto(221),
    goto(118),
    shiftr(a,0,13),
    sets(3,1),
    goto(224),
    cstack,
    clears,
    shiftr(a,0,13),
    goto(221),
    setreg(c,m,0,13),
    goto(219),
    setreg(b,a,0,13),
    zeroreg(a,2,2),
    shiftl(a,3,13),
    decreg(a,0,2),
    goto(135),
    ifregzero(c,2,2),
    goto(141),
    exchreg(a,b,3,13),
    setp(13),
    goto(141),
    exchreg(a,b,0,13),
    zeroreg(a,0,13),
    tests(3),
    goto(84),
    decreg(a,13,13),
    negsubc(13,13),
    tests(7),
    goto(87),
    cstack,
    sets(7,1),
    zeroreg(c,0,13),
    decreg(c,0,2),
    exchreg(a,c,13,13),
    testp(11),
    goto(71),
    jsb(71),
    sets(6,1),
    jsb(229),
    shiftr(a,3,13),
    testp(12),
    goto(94),
    exchreg(b,c,0,13),
    increg(c,0,13),
    setp(1),
    shiftl(a,0,-1),
    incp,
    ifregzero(c,-1,-1),
    goto(102),
    decreg(c,0,13),
    exchreg(b,c,0,13),
    exchreg(a,c,3,12),
    testp(3),
    goto(175),
    exchreg(a,c,3,12),
    zeroreg(a,0,2),
    tests(4),
    goto(95),
    goto(122),
    jsb(84),
    setrom(1),
    sets(4,1),
    tests(11),
    goto(28),
    shiftr(a,0,13),
    jsb(229),
    setreg(b,a,0,2),
    shiftr(a,0,13),
    setreg(b,a,2,2),
    sub(a,a,b,0,2),
    exchreg(a,c,0,2),
    ifregzero(b,2,2),
    goto(131),
    negc(0,2),
    sub(c,a,c,0,2),
    setreg(a,c,0,2),
    jsb(240),
    goto(221),
    shiftr(a,3,13),
    decp,
    testp(2),
    goto(71),
    setp(12),
    zeroreg(a,0,13),
    zeroreg(a,3,13),
    increg(a,-1,-1),
    increg(a,-1,-1),
    setp(2),
    incp,
    decreg(a,-1,-1),
    goto(150),
    ifregzero(b,-1,-1),
    goto(145),
    increg(a,-1,-1),
    exchreg(a,b,0,13),
    retn,
    negsubc(13,13),
    stacka,
    zeroreg(b,0,13),
    increg(a,2,2),
    increg(a,2,2),
    increg(c,2,2),
    increg(c,2,2),
    regsgte(a,c,0,2),
    goto(163),
    exchreg(a,c,0,13),
    exchreg(a,c,3,12),
    ifregzero(c,3,12),
    goto(167),
    exchreg(a,c,0,13),
    exchreg(b,c,3,12),
    regsgte(a,c,0,2),
    goto(190),
    shiftr(b,0,13),
    increg(a,0,2),
    ifregzero(b,0,13),
    goto(190),
    goto(168),
    setreg(a,c,3,12),
    tests(6),
    goto(180),
    decp,
    decreg(c,0,2),
    shiftr(b,0,-1),
    setp(12),
    ifregzero(c,3,12),
    goto(112),
    increg(c,0,2),
    sets(11,1),
    regsgte1(a,-1,-1),
    goto(111),
    shiftl(a,3,12),
    goto(186),
    setrom(1),
    jsb(237),
    sets(5,1),
    goto(221),
    shiftr(a,0,13),
    setreg(a,c,13,13),
    sets(8,0),
    goto(207),
    increg(c,2,2),
    sets(8,1),
    tests(5),
    goto(205),
    increg(c,0,2),
    goto(198),
    disptoggle,
    tests(0),
    goto(199),
    sets(0,0),
    decp,
    testp(12),
    goto(208),
    dispoff,
    tests(8),
    goto(204),
    shiftl(a,0,13),
    sets(5,0),
    keyrom,
    cstack,
    exchreg(a,c,0,13),
    jsb(253),
    sets(7,1),
    jsb(229),
    jsb(78),
    goto(99),
    tests(4),
    goto(228),
    add(a,a,b,2,2),
    goto(251),
    negsubc(13,13),
    sets(10,0),
    goto(195),
    exchreg(a,c,2,2),
    zeroreg(c,0,-1),
    decreg(c,0,-1),
    zeroreg(c,2,2),
    regsgte1(a,2,2),
    goto(253),
    zeroreg(c,0,13),
    clears,
    setreg(a,c,0,13),
    setp(12),
    ifregzero(c,2,2),
    goto(247),
    negc(0,2),
    decreg(c,2,2),
    goto(231),
    setp(5),
    exchreg(a,c,0,2),
    tests(4),
    goto(68),
    exchreg(a,b,0,2),
    zeroreg(b,0,2),
    goto(122),
    regsgte1(c,3,12),
    goto(238),
    goto(237),
    goto(243),
    exchreg(a,b,0,13),
    jsb(40),
    stacka,
    jsb(40),
    stacka,
    tests(9),
    goto(9),
    exchreg(a,c,0,13),
    tests(5),
    goto(18),
    zeroreg(c,13,13),
    jsb(166),
    cstack,
    jsb(165),
    jsb(152),
    jsb(37),
    stacka,
    jsb(166),
    tests(10),
    goto(218),
    zeroreg(a,0,13),
    increg(a,-1,-1),
    setreg(b,a,3,12),
    exchreg(a,c,3,12),
    decreg(c,0,2),
    shiftr(b,0,-1),
    ifregzero(c,2,2),
    goto(25),
    shiftr(a,0,-1),
    increg(c,0,2),
    goto(29),
    shiftr(a,0,13),
    shiftr(b,0,13),
    cstack,
    exchreg(b,c,0,13),
    goto(65),
    exchreg(b,c,0,13),
    setp(4),
    goto(222),
    cstack,
    exchreg(a,c,0,13),
    ifregzero(c,-1,-1),
    goto(45),
    negc(0,13),
    setreg(a,c,0,13),
    setreg(c,b,0,2),
    goto(203),
    setreg(a,c,0,13),
    tests(1),
    goto(37),
    tests(10),
    goto(109),
    tests(5),
    goto(21),
    negsubc(13,13),
    exchreg(a,c,13,13),
    goto(13),
    shiftr(b,0,-1),
    decreg(a,13,13),
    goto(58),
    increg(c,13,13),
    exchreg(a,b,0,-1),
    add(c,a,c,0,-1),
    exchreg(a,b,0,13),
    setreg(b,a,0,13),
    sub(a,a,c,0,-1),
    goto(59),
    stacka,
    shiftr(a,0,13),
    exchreg(a,c,0,-1),
    exchreg(a,b,0,13),
    shiftl(a,0,-1),
    cstack,
    increg(a,13,13),
    increg(a,13,13),
    goto(35),
    zeroreg(c,0,13),
    zeroreg(b,0,2),
    increg(c,-1,-1),
    jsb(183),
    decreg(c,-1,-1),
    stacka,
    exchreg(a,c,0,13),
    setp(4),
    jsb(164),
    setp(6),
    jsb(155),
    setp(8),
    jsb(155),
    setp(2),
    loadconst(8),
    setp(10),
    jsb(155),
    jsb(142),
    jsb(155),
    jsb(204),
    shiftl(a,0,13),
    jsb(155),
    setreg(c,b,0,13),
    jsb(203),
    jsb(204),
    add(c,c,c,0,13),
    jsb(166),
    tests(9),
    goto(108),
    negsubc(13,13),
    jsb(152),
    sets(1,0),
    zeroreg(c,0,13),
    decreg(c,-1,-1),
    increg(c,0,2),
    tests(1),
    goto(165),
    jsb(166),
    jsb(204),
    add(c,c,c,0,13),
    jsb(165),
    jsb(204),
    add(c,c,c,0,13),
    add(c,c,c,0,13),
    jsb(149),
    add(c,c,c,0,13),
    jsb(235),
    jsb(204),
    setp(10),
    jsb(156),
    jsb(142),
    setp(8),
    jsb(157),
    setp(2),
    loadconst(8),
    setp(6),
    jsb(156),
    setp(4),
    jsb(156),
    jsb(156),
    exchreg(a,b,0,13),
    shiftr(c,0,13),
    setp(13),
    loadconst(5),
    goto(251),
    setp(6),
    loadconst(8),
    loadconst(6),
    loadconst(5),
    loadconst(2),
    loadconst(4),
    loadconst(9),
    tests(1),
    goto(218),
    retn,
    zeroreg(a,0,13),
    increg(a,-1,-1),
    setrom(0),
    setrom(2),
    shiftl(a,0,13),
    shiftr(b,3,13),
    exchreg(b,c,0,13),
    goto(161),
    increg(c,13,13),
    sub(a,a,b,0,13),
    goto(160),
    add(a,a,b,0,13),
    setrom(2),
    setrom(2),
    sub(c,a,c,0,2),
    setrom(2),
    increg(c,-1,-1),
    sub(a,a,c,0,13),
    goto(168),
    add(a,a,c,0,13),
    shiftl(a,0,13),
    decp,
    shiftr(c,0,-1),
    testp(0),
    goto(169),
    goto(45),
    increg(c,-1,-1),
    sub(a,a,b,3,13),
    goto(178),
    add(a,a,b,3,13),
    shiftl(a,3,13),
    decp,
    testp(0),
    goto(179),
    goto(45),
    decp,
    add(a,a,b,3,13),
    goto(219),
    setrom(0),
    decreg(c,2,2),
    decreg(c,2,2),
    zeroreg(a,0,2),
    sub(a,a,c,13,13),
    regsgte1(a,13,13),
    goto(198),
    setrom(2),
    regsgte(a,b,3,12),
    goto(202),
    negsubc(13,13),
    exchreg(a,b,0,13),
    sub(a,a,b,0,13),
    setrom(2),
    zeroreg(c,0,13),
    setp(11),
    loadconst(7),
    loadconst(8),
    loadconst(5),
    loadconst(3),
    loadconst(9),
    loadconst(8),
    loadconst(1),
    loadconst(6),
    loadconst(3),
    loadconst(5),
    setp(12),
    retn,
    setrom(0),
    add(a,a,b,0,2),
    goto(222),
    decreg(c,-1,-1),
    increg(c,13,13),
    testp(0),
    goto(187),
    exchreg(a,c,0,2),
    zeroreg(a,0,2),
    regsgte1(c,-1,-1),
    goto(230),
    shiftr(a,0,13),
    shiftr(c,0,13),
    exchreg(b,c,0,2),
    zeroreg(c,0,2),
    setp(12),
    goto(174),
    setrom(2),
    shiftr(b,0,-1),
    shiftr(b,0,-1),
    decreg(c,13,13),
    goto(236),
    add(c,a,c,0,-1),
    sub(a,a,b,0,-1),
    exchreg(b,c,0,-1),
    setreg(c,b,0,13),
    decreg(a,13,13),
    goto(238),
    exchreg(a,c,0,-1),
    stacka,
    ifregzero(b,13,13),
    goto(1),
    shiftl(a,0,13),
    exchreg(a,c,0,-1),
    cstack,
    shiftr(b,0,-1),
    decreg(c,13,13),
    exchreg(b,c,13,13),
    setrom(0),
    exchreg(a,b,13,13),
    increg(a,13,13),
    shiftr(c,3,13),
    shiftl(a,0,-1),
    goto(18),
    stacka,
    jsb(166),
    setreg(a,c,0,13),
    tests(8),
    goto(67),
    zeroreg(a,0,13),
    sub(a,a,c,3,12),
    goto(0),
    shiftr(a,0,13),
    decreg(c,13,13),
    goto(0),
    increg(c,13,13),
    setreg(b,a,0,13),
    jsb(150),
    decreg(a,-1,-1),
    goto(17),
    exchreg(a,b,0,-1),
    setreg(b,a,13,13),
    add(a,a,b,13,13),
    goto(1),
    setp(7),
    jsb(109),
    setp(8),
    jsb(157),
    setp(9),
    jsb(156),
    jsb(254),
    setp(10),
    jsb(156),
    jsb(125),
    setp(11),
    jsb(156),
    jsb(223),
    jsb(156),
    jsb(185),
    jsb(156),
    jsb(246),
    exchreg(a,c,0,13),
    sub(c,a,c,0,13),
    ifregzero(b,2,2),
    goto(48),
    sub(c,a,c,0,13),
    exchreg(a,b,0,13),
    decp,
    shiftl(a,0,13),
    testp(1),
    goto(49),
    exchreg(a,c,0,13),
    ifregzero(c,13,13),
    goto(57),
    negsubc(3,12),
    increg(c,0,2),
    setp(11),
    jsb(197),
    tests(9),
    goto(6),
    tests(5),
    goto(148),
    jsb(246),
    jsb(167),
    goto(148),
    jsb(246),
    jsb(236),
    zeroreg(b,3,13),
    jsb(185),
    setp(11),
    jsb(155),
    jsb(223),
    setp(10),
    jsb(155),
    jsb(125),
    setp(9),
    jsb(155),
    jsb(254),
    setp(8),
    jsb(155),
    jsb(155),
    jsb(155),
    setp(13),
    exchreg(b,c,0,13),
    exchreg(a,c,0,13),
    loadconst(6),
    goto(142),
    tests(2),
    goto(94),
    increg(a,0,2),
    regsgte1(a,2,2),
    goto(194),
    sub(a,a,b,3,13),
    goto(89),
    add(a,a,b,3,13),
    shiftl(a,0,13),
    decreg(c,0,2),
    goto(92),
    shiftr(a,0,13),
    zeroreg(c,0,-1),
    exchreg(a,c,0,2),
    ifregzero(c,13,13),
    goto(108),
    exchreg(a,b,0,13),
    sub(a,a,b,0,13),
    negsubc(0,2),
    shiftr(a,0,13),
    exchreg(b,c,0,13),
    zeroreg(c,0,13),
    decreg(c,3,12),
    tests(2),
    goto(118),
    loadconst(4),
    increg(c,3,12),
    goto(121),
    loadconst(6),
    testp(1),
    goto(117),
    shiftr(c,0,13),
    shiftr(c,0,13),
    tests(2),
    goto(148),
    retn,
    setp(7),
    loadconst(3),
    loadconst(3),
    loadconst(0),
    loadconst(8),
    loadconst(5),
    loadconst(0),
    loadconst(9),
    goto(234),
    jsb(150),
    increg(a,-1,-1),
    setreg(b,a,0,13),
    decreg(c,13,13),
    goto(134),
    shiftr(a,0,-1),
    exchreg(a,c,0,13),
    shiftl(a,3,13),
    exchreg(a,c,0,13),
    decreg(a,13,13),
    goto(136),
    zeroreg(a,0,13),
    increg(a,-1,-1),
    jsb(196),
    setrom(1),
    shiftr(a,0,-1),
    decreg(a,13,13),
    goto(149),
    add(a,a,b,0,-1),
    exchreg(a,b,13,13),
    retn,
    setrom(1),
    shiftr(a,0,13),
    exchreg(b,c,0,13),
    goto(160),
    add(a,a,b,0,13),
    decreg(c,13,13),
    goto(159),
    exchreg(a,c,0,13),
    shiftl(a,3,13),
    exchreg(a,c,0,13),
    goto(109),
    setp(3),
    add(c,a,c,0,2),
    sub(c,a,c,13,13),
    goto(171),
    negc(13,13),
    exchreg(a,b,3,12),
    zeroreg(a,0,13),
    testp(12),
    goto(197),
    regsgte1(c,3,12),
    goto(182),
    tests(1),
    goto(0),
    setreg(c,b,0,-1),
    decreg(a,3,12),
    increg(c,2,2),
    exchreg(b,c,0,-1),
    exchreg(a,c,3,12),
    setrom(1),
    sets(8,0),
    loadconst(6),
    loadconst(9),
    loadconst(3),
    loadconst(1),
    loadconst(4),
    loadconst(7),
    loadconst(1),
    goto(230),
    increg(a,3,12),
    goto(100),
    add(a,a,b,0,13),
    decreg(c,-1,-1),
    goto(196),
    shiftr(a,0,13),
    incp,
    testp(13),
    goto(197),
    increg(c,0,2),
    zeroreg(a,13,13),
    setp(12),
    zeroreg(b,0,13),
    regsgte1(a,-1,-1),
    goto(214),
    shiftl(a,0,13),
    decreg(c,0,2),
    regsgte1(a,0,13),
    goto(207),
    zeroreg(c,0,13),
    setreg(b,a,0,2),
    add(a,a,b,0,13),
    regsgte1(a,13,13),
    goto(199),
    exchreg(a,c,3,12),
    setreg(a,c,0,13),
    zeroreg(b,0,13),
    setp(12),
    goto(122),
    setp(9),
    loadconst(3),
    loadconst(1),
    loadconst(0),
    loadconst(1),
    loadconst(7),
    loadconst(9),
    loadconst(8),
    loadconst(0),
    loadconst(5),
    loadconst(5),
    loadconst(3),
    goto(221),
    exchreg(a,c,0,13),
    setreg(b,a,0,13),
    setreg(a,c,3,12),
    add(c,c,c,2,2),
    goto(94),
    increg(c,2,2),
    shiftr(a,0,13),
    increg(c,0,2),
    goto(242),
    goto(103),
    zeroreg(c,0,13),
    setp(12),
    loadconst(2),
    loadconst(3),
    loadconst(0),
    loadconst(2),
    loadconst(5),
    goto(129),
    setp(5),
    goto(126),
];
