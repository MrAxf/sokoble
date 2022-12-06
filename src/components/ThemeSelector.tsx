import { RadioGroup } from '@headlessui/react'
import { useTheme } from 'next-themes'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdComputer, MdDarkMode, MdLightMode } from 'react-icons/md'

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation('config')

  const onThemeChange = (newTheme: string) => {
    setTheme(newTheme)
  }

  return (
    <RadioGroup
          value={theme}
          onChange={onThemeChange}
          className="flex flex-row justify-between items-center"
        >
          <RadioGroup.Label>{t('theme')}</RadioGroup.Label>
          <div className="flex flex-row max-w-[300px] w-full">
            <RadioGroup.Option value="system" className="flex-grow text-sm">
              {({ checked }) => (
                <span
                  className={`rounded-l-md text-white transition bg-secondary-main hover:bg-secondary-dark w-full flex justify-between align-middle items-center cursor-pointer p-3 ${
                    checked ? 'bg-secondary-dark' : ''
                  }`}
                >
                  <MdComputer className="inline-block" /> {t('system')}
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="light" className="flex-grow text-sm">
              {({ checked }) => (
                <span
                  className={`text-white transition bg-secondary-main hover:bg-secondary-dark w-full flex justify-between align-middle items-center cursor-pointer p-3 ${
                    checked ? 'bg-secondary-dark' : ''
                  }`}
                >
                  <MdLightMode className="inline-block" /> {t('light')}
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="dark" className="flex-grow text-sm">
              {({ checked }) => (
                <span
                  className={`rounded-r-md text-white transition bg-secondary-main hover:bg-secondary-dark w-full flex justify-between align-middle items-center cursor-pointer p-3 ${
                    checked ? 'bg-secondary-dark' : ''
                  }`}
                >
                  <MdDarkMode className="inline-block" /> {t('dark')}
                </span>
              )}
            </RadioGroup.Option>
          </div>
        </RadioGroup>
  )
}
