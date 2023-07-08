export interface AnalogInput{
    id: number,
    name: string,
    driver: string,
    ioAddress: number,
    scanTime: number,
    alarms: Alarm[],
    isOn: boolean,
    lowLimit: number,
    hightLimit: number,
    units: string,
    value: number
}

export interface DigitalInput{
    Id: number,
    Name: string,
    Driver: string,
    Address: number,
    ScanTime: number,
    ScanOn: boolean
}

export interface InputsDTO {
    analogInputs: AnalogInput[],
    digitalInputs: DigitalInput[]
}

export interface Alarm{
    Type: AlarmType,
    Priority: number,
    Treshold: number,
    Unit: string
}

enum AlarmType { Low, Hight }