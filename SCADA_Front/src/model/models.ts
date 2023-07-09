export interface AnalogInput{
    id: number,
    name: string,
    driver: string,
    ioAddress: number,
    scanTime: number,
    alarms: Alarm[],
    isOn: boolean,
    lowLimit: number,
    highLimit: number,
    units: string,
    value: number
}

export interface DigitalInput{
    id: number,
    name: string,
    driver: string,
    address: number,
    scanTime: number,
    isOn: boolean
}

export interface InputsDTO {
    analogInputs: AnalogInput[],
    digitalInputs: DigitalInput[]
}

export interface Alarm{
    type: AlarmType,
    priority: number,
    threshold: number,
    unit: string
}

enum AlarmType { Low, Hight }