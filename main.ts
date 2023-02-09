IR.IR_callbackUser(function (message) {
    if (message == 70) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
    if (message == 21) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    }
    if (message == 67) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (message == 68) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
    if (message == 64) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
