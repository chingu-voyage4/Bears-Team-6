// @flow

import { devLog, quietLog, errorWarning } from './loggers'

describe('devLog', () => {
  it('should call console log with same args', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(()=>{})
    expect(spy).not.toHaveBeenCalled()
    devLog(123)
    expect(spy).toHaveBeenCalledWith(123)
    spy.mockRestore()
  })
  
  it('should call console log with same several args', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(()=>{})
    expect(spy).not.toHaveBeenCalled()
    devLog(123, 456, 789)
    expect(spy).toHaveBeenCalledWith(123, 456, 789)
    spy.mockRestore()
  })
})

describe('quietLog', () => {
  it('should call console log with same args', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(()=>{})
    expect(spy).not.toHaveBeenCalled()
    quietLog(123)
    expect(spy).toHaveBeenCalledWith(123)
    spy.mockRestore()
  })

  it('should call console log with same several args', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(()=>{})
    expect(spy).not.toHaveBeenCalled()
    quietLog(123, 456, 789)
    expect(spy).toHaveBeenCalledWith(123, 456, 789)
    spy.mockRestore()
  })
})

describe('errorWarning', () => {
  it('should call console log with same 2 args', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(()=>{})
    expect(spy).not.toHaveBeenCalled()
    errorWarning(123)
    expect(spy).toHaveBeenCalledWith(123, '')
    spy.mockRestore()
  })

  it('should call console log with same several args', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(()=>{})
    expect(spy).not.toHaveBeenCalled()
    errorWarning(123, 456, 789)
    expect(spy).toHaveBeenCalledWith(123, 456)
    spy.mockRestore()
  })
})