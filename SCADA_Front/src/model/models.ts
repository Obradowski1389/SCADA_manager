export interface AnalogInput{
    Id: number,
    Name: string,//
    Driver: string,//
    Address: number,//
    ScanTime: number,//
    Alarms: Alarm[],
    ScanOn: boolean,
    LowLimit: number,//
    HightLimit: number,//
    Unit: string,//
    Value: number
}

export interface DigitalInput{
    Id: number,
    Name: string,//
    Driver: string,//
    Address: number,//
    ScanTime: number,//
    ScanOn: boolean
}

export interface InputsDTO {
    AnalogInputs: AnalogInput[],
    DigitalInputs: DigitalInput[]
}

export interface Alarm{
    Type: AlarmType,
    Priority: number,
    Treshold: number,
    Unit: string
}

enum AlarmType { Low, Hight }