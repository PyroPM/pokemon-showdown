// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	{
		section: 'UCC Singles',
	},
	{
		name: '[Gen 6] Gamma',
		mod: 'gen6uranium',
		searchShow: false,
		ruleset: ['Standard', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod', 'Tandor Pokedex'],
		banlist: ['Uber', 'Shadow Tag', 'Belly Drum'],
	},
	{
		name: '[Gen 6] Omega',
		mod: 'gen6uranium',
		searchShow: false,
		ruleset: ['Standard', 'Nuclear Clause Mod', 'Tandor Pokedex'],
		banlist: ['AG', 'Shadow Tag'],
	},
	{
		name: '[Gen 6] Beta',
		mod: 'gen6uranium',
		searchShow: false,
		ruleset: ['[Gen 6] Gamma'],
		banlist: ['OU'],
	},
	{
		name: '[Gen 6] Alpha',
		mod: 'gen6uranium',
		searchShow: false,
		ruleset: ['[Gen 6] Beta'],
		banlist: ['UU'],
	},

];
