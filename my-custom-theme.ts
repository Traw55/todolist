
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #015ac6 
		"--color-primary-50": "217 230 246", // #d9e6f6
		"--color-primary-100": "204 222 244", // #ccdef4
		"--color-primary-200": "192 214 241", // #c0d6f1
		"--color-primary-300": "153 189 232", // #99bde8
		"--color-primary-400": "77 140 215", // #4d8cd7
		"--color-primary-500": "1 90 198", // #015ac6
		"--color-primary-600": "1 81 178", // #0151b2
		"--color-primary-700": "1 68 149", // #014495
		"--color-primary-800": "1 54 119", // #013677
		"--color-primary-900": "0 44 97", // #002c61
		// secondary | #ffffff 
		"--color-secondary-50": "255 255 255", // #ffffff
		"--color-secondary-100": "255 255 255", // #ffffff
		"--color-secondary-200": "255 255 255", // #ffffff
		"--color-secondary-300": "255 255 255", // #ffffff
		"--color-secondary-400": "255 255 255", // #ffffff
		"--color-secondary-500": "255 255 255", // #ffffff
		"--color-secondary-600": "230 230 230", // #e6e6e6
		"--color-secondary-700": "191 191 191", // #bfbfbf
		"--color-secondary-800": "153 153 153", // #999999
		"--color-secondary-900": "125 125 125", // #7d7d7d
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41447 
		"--color-error-50": "249 220 227", // #f9dce3
		"--color-error-100": "246 208 218", // #f6d0da
		"--color-error-200": "244 196 209", // #f4c4d1
		"--color-error-300": "238 161 181", // #eea1b5
		"--color-error-400": "225 91 126", // #e15b7e
		"--color-error-500": "212 20 71", // #D41447
		"--color-error-600": "191 18 64", // #bf1240
		"--color-error-700": "159 15 53", // #9f0f35
		"--color-error-800": "127 12 43", // #7f0c2b
		"--color-error-900": "104 10 35", // #680a23
		// surface | #e6e6e6 
		"--color-surface-50": "251 251 251", // #fbfbfb
		"--color-surface-100": "250 250 250", // #fafafa
		"--color-surface-200": "249 249 249", // #f9f9f9
		"--color-surface-300": "245 245 245", // #f5f5f5
		"--color-surface-400": "238 238 238", // #eeeeee
		"--color-surface-500": "230 230 230", // #e6e6e6
		"--color-surface-600": "207 207 207", // #cfcfcf
		"--color-surface-700": "173 173 173", // #adadad
		"--color-surface-800": "138 138 138", // #8a8a8a
		"--color-surface-900": "113 113 113", // #717171
		
	}
}