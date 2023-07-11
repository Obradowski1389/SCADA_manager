export interface AnalogInput{
    id: number,
    name: string,
    driver: string,
    ioAddress: string,
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
    ioAddress: string,
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
    analogInputId: number
}

enum AlarmType { Low, Hight }

export interface AnalogOutput{
    id: number,
    name: string,
    ioAddress: string,
    lowLimit: number,
    highLimit: number,
    units: string,
    initialValue: number
}

export interface DigitalOutput{
    id: number,
    name: string,
    ioAddress: string,
    initialValue: number
}

export interface OutputsDTO {
    analogOutputs: AnalogOutput[],
    digitalOutputs: DigitalOutput[]
}

export interface RTU {
    Id: number,
    LowLimit: number,
    HightLimit: number,
    Address: number,
}