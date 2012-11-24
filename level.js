LEVEL = {
	"commits": [{
		"message": "scaffold stage...",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a27c53c66df706c91b0bc837bb10d094655ae9db",
		"date": "2010-10-02 10:27:00",
		"author": "jrburke",
		"time": 0,
		"parents": [],
		"login": "jrburke"
	}, {
		"message": "Trying to wire up cpm with paths and such. Made tricky since cpm does require calls for rhino modules, but the r.js converter finds them. So had to modify cpm source to comment out for now, but need a more robust solution going forward.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b1c3dc558dcd43c048696d8424ab0d5d45f6f7d8",
		"date": "2010-10-02 21:53:41",
		"author": "jrburke",
		"time": 1,
		"parents": [
			["a27c53c66df706c91b0bc837bb10d094655ae9db", 0, 0]
		],
		"login": "jrburke"
	}, {
		"message": "More scaffolding. Completely broken but want to save current state.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "38dee957039f772ddf44ab3cec06d3d3c4830637",
		"date": "2010-10-04 23:31:09",
		"author": "jrburke",
		"time": 2,
		"parents": [
			["b1c3dc558dcd43c048696d8424ab0d5d45f6f7d8", 1, 0]
		],
		"login": "jrburke"
	}, {
		"message": "moving some other docs over from RequireJS",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "2249d8774bf279d71d75e7d8d97491935c73b56c",
		"date": "2010-10-04 23:34:12",
		"author": "jrburke",
		"time": 3,
		"parents": [
			["38dee957039f772ddf44ab3cec06d3d3c4830637", 2, 0]
		],
		"login": "jrburke"
	}, {
		"message": "more stuff moved over from RequireJS",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "01f7c829907fefa8a94854d1848f07d1fe857fb7",
		"date": "2010-10-04 23:36:46",
		"author": "jrburke",
		"time": 4,
		"parents": [
			["2249d8774bf279d71d75e7d8d97491935c73b56c", 3, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Got basic routing to actions working. Probably need to start using promises for return values.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "15402591d583413194d3ce79ac90db4ef776a433",
		"date": "2010-10-06 14:29:19",
		"author": "jrburke",
		"time": 5,
		"parents": [
			["01f7c829907fefa8a94854d1848f07d1fe857fb7", 4, 0]
		],
		"login": "jrburke"
	}, {
		"message": "trying out deferreds/promises",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "455cee5c05834edf002b9b64e038c822980cc293",
		"date": "2010-10-06 18:04:27",
		"author": "jrburke",
		"time": 6,
		"parents": [
			["15402591d583413194d3ce79ac90db4ef776a433", 5, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Got app and web app template creation to work.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "3cc9a61701538f231993a04d61a310433a6a64fd",
		"date": "2010-10-06 22:40:28",
		"author": "jrburke",
		"time": 7,
		"parents": [
			["455cee5c05834edf002b9b64e038c822980cc293", 6, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Can pull a zip file, update package.json, lib/main.js and convert modules to an async format. Lots of edge cases to clean up and running code has not been tried.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "94fee9c4c514915a187d8cf6e804b6ba3f78c8a6",
		"date": "2010-10-07 16:36:50",
		"author": "jrburke",
		"time": 8,
		"parents": [
			["3cc9a61701538f231993a04d61a310433a6a64fd", 7, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Playing around, trying a different organization, nothing works.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "20c52a4fb3ccc91672edb2d33120ac0ded55e242",
		"date": "2011-12-14 23:06:19",
		"author": "jrburke",
		"time": 9,
		"parents": [
			["94fee9c4c514915a187d8cf6e804b6ba3f78c8a6", 8, 0]
		],
		"login": "jrburke"
	}, {
		"message": "new organization stuff, nothing works.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "1c9affa9c46bd0cc106b6e98bbaadd437e18182a",
		"date": "2011-12-14 23:06:51",
		"author": "jrburke",
		"time": 10,
		"parents": [
			["20c52a4fb3ccc91672edb2d33120ac0ded55e242", 9, 0]
		],
		"login": "jrburke"
	}, {
		"message": "switching to requirejs instead of almond to enable on the fly loading.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "60d2ecc6676e85910b2997d41b5d75d26af1c192",
		"date": "2011-12-15 11:32:52",
		"author": "jrburke",
		"time": 11,
		"parents": [
			["1c9affa9c46bd0cc106b6e98bbaadd437e18182a", 10, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Set up baseUrl to be the sibling dir to the script, start converting main.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "1876d8024cc6613dfec6cfa52d9a8cf3cbd91610",
		"date": "2011-12-15 11:49:38",
		"author": "jrburke",
		"time": 12,
		"parents": [
			["60d2ecc6676e85910b2997d41b5d75d26af1c192", 11, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Got basic dynamic loading working again, now need to work on api for actions.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "cbe50c3bab5e7a676162ddb5fb2b6e19b6c81a45",
		"date": "2011-12-15 13:28:52",
		"author": "jrburke",
		"time": 13,
		"parents": [
			["1876d8024cc6613dfec6cfa52d9a8cf3cbd91610", 12, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Moving around the structure, got basic command listing working with validation, but nothing useful yet.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "2ca63bf30f2980a41be174fabb79a92097141c4e",
		"date": "2011-12-15 21:49:09",
		"author": "jrburke",
		"time": 14,
		"parents": [
			["cbe50c3bab5e7a676162ddb5fb2b6e19b6c81a45", 13, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Playing with the github api",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a1986d9dba4ca22a577df64d5014b7e25e8ba1f3",
		"date": "2011-12-16 22:59:52",
		"author": "jrburke",
		"time": 15,
		"parents": [
			["2ca63bf30f2980a41be174fabb79a92097141c4e", 14, 0]
		],
		"login": "jrburke"
	}, {
		"message": "experiment with downloading tarball from github",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "61d10c1710d73cc8753850583c7c67602b9b093c",
		"date": "2011-12-17 18:10:15",
		"author": "jrburke",
		"time": 16,
		"parents": [
			["a1986d9dba4ca22a577df64d5014b7e25e8ba1f3", 15, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Setting up a test infrastructure. Things are broken.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "676cc60ae722bded0f2705ddc0af892e7ae135a0",
		"date": "2011-12-19 13:00:15",
		"author": "jrburke",
		"time": 17,
		"parents": [
			["61d10c1710d73cc8753850583c7c67602b9b093c", 16, 0]
		],
		"login": "jrburke"
	}, {
		"message": "first unit test of a module that passes.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "9ca4dbdb1383e7c8afc2eabedc52617886414859",
		"date": "2011-12-19 13:46:51",
		"author": "jrburke",
		"time": 18,
		"parents": [
			["676cc60ae722bded0f2705ddc0af892e7ae135a0", 17, 0]
		],
		"login": "jrburke"
	}, {
		"message": "connected the plumbing to do a github download and untar, but code is really rough/ugly, and still needs to work out edge cases/proper error handling.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e34e4a9899036b52526b764e73f5f5364f0ba147",
		"date": "2011-12-19 23:34:27",
		"author": "jrburke",
		"time": 19,
		"parents": [
			["9ca4dbdb1383e7c8afc2eabedc52617886414859", 18, 0]
		],
		"login": "jrburke"
	}, {
		"message": "cleanup of code, make sure temp dir is removed when done even on errors, allow single JS install.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "334ac29e1d4b2f52c282824fa30696f54f909ffe",
		"date": "2011-12-20 16:55:58",
		"author": "jrburke",
		"time": 20,
		"parents": [
			["e34e4a9899036b52526b764e73f5f5364f0ba147", 19, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Add adapter module if a directory install.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e3336209cc7d4b5f2566935dd4aeb0c348faf669",
		"date": "2011-12-21 16:21:50",
		"author": "jrburke",
		"time": 21,
		"parents": [
			["334ac29e1d4b2f52c282824fa30696f54f909ffe", 20, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Move github config to config, allow owner/repo/version#file/path.js and allow for overrides for files that are built and stored on cdns/files.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "cd5e4dc620a753440d8a981ac3612b3df24340e3",
		"date": "2011-12-25 22:21:39",
		"author": "jrburke",
		"time": 22,
		"parents": [
			["e3336209cc7d4b5f2566935dd4aeb0c348faf669", 21, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Adding a semver sorting function. Not integrated yet.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "3375d66f2687154028219d058845dbbfe812bce1",
		"date": "2011-12-27 12:46:08",
		"author": "jrburke",
		"time": 23,
		"parents": [
			["cd5e4dc620a753440d8a981ac3612b3df24340e3", 22, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Adjust test to match new priorities in packageJson, some minor cleanup on console output for the add command. Use pkg/version to get latest version of a lib.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c8cf8f3f063ba7d16191bdd2b9388ae3a6510922",
		"date": "2011-12-27 14:11:35",
		"author": "jrburke",
		"time": 24,
		"parents": [
			["3375d66f2687154028219d058845dbbfe812bce1", 23, 0]
		],
		"login": "jrburke"
	}, {
		"message": "For specific path installs, just use raw.github.com instead of downloading a tarball.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f1341b70b758f21d93197f466f06322f72c60d98",
		"date": "2011-12-27 14:46:27",
		"author": "jrburke",
		"time": 25,
		"parents": [
			["c8cf8f3f063ba7d16191bdd2b9388ae3a6510922", 24, 0]
		],
		"login": "jrburke"
	}, {
		"message": "dead comment removal.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a32ce494911d39977bc73ed1b0c5267e6b44a8c5",
		"date": "2011-12-27 15:37:52",
		"author": "jrburke",
		"time": 26,
		"parents": [
			["f1341b70b758f21d93197f466f06322f72c60d98", 25, 0]
		],
		"login": "jrburke"
	}, {
		"message": "renaming to volo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c94149d4bf475af4cbf8ef2a9fbf18ec0f64a6db",
		"date": "2011-12-27 15:54:43",
		"author": "jrburke",
		"time": 27,
		"parents": [
			["a32ce494911d39977bc73ed1b0c5267e6b44a8c5", 26, 0]
		],
		"login": "jrburke"
	}, {
		"message": "renaming to volo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "00402d574b9c103b801cd44d49e027c940cb3a0e",
		"date": "2011-12-27 15:59:34",
		"author": "jrburke",
		"time": 28,
		"parents": [
			["c94149d4bf475af4cbf8ef2a9fbf18ec0f64a6db", 27, 0]
		],
		"login": "jrburke"
	}, {
		"message": "prepping for a create task, doing some refactoring to share some work between create and addd. Midstream.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "6a5cd7fd78f19a7c43fe4e638b4aa2e6048f63da",
		"date": "2011-12-27 23:35:25",
		"author": "jrburke",
		"time": 29,
		"parents": [
			["00402d574b9c103b801cd44d49e027c940cb3a0e", 28, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Basic create working.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ecab6b032a2e7127ce51167fe06998053c80fa04",
		"date": "2011-12-28 22:44:08",
		"author": "jrburke",
		"time": 30,
		"parents": [
			["6a5cd7fd78f19a7c43fe4e638b4aa2e6048f63da", 29, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Look for amd.baseUrl in package.json for adding, then look for a js or scripts directory, then default to current directory for the add command. Small console log feedback formatting changes.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8557afa0d06e28b97d5e3ab6eadafd2c555faf8a",
		"date": "2011-12-30 18:09:57",
		"author": "jrburke",
		"time": 31,
		"parents": [
			["ecab6b032a2e7127ce51167fe06998053c80fa04", 30, 0]
		],
		"login": "jrburke"
	}, {
		"message": "remove directories from a project that do not make sense in an installed format.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5b56f158de7ca6364fa33de2dbd696c8d02dd73d",
		"date": "2011-12-30 21:48:44",
		"author": "jrburke",
		"time": 32,
		"parents": [
			["8557afa0d06e28b97d5e3ab6eadafd2c555faf8a", 31, 0]
		],
		"login": "jrburke"
	}, {
		"message": "working on acquire command, but having to rework some things. Intermediate commit, nothing works.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c2460816da3058f8751227b98a5c724773275925",
		"date": "2012-01-01 00:26:43",
		"author": "jrburke",
		"time": 33,
		"parents": [
			["5b56f158de7ca6364fa33de2dbd696c8d02dd73d", 32, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Getting acquire working.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "4abc238d9592586b17daad1ae619f816a3a39e66",
		"date": "2012-01-01 15:19:10",
		"author": "jrburke",
		"time": 34,
		"parents": [
			["c2460816da3058f8751227b98a5c724773275925", 33, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Allow usage of commands installed in a sibling volo directory.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b0acec5ffe0a801e0218ce412c9d6d1712865290",
		"date": "2012-01-01 15:38:35",
		"author": "jrburke",
		"time": 35,
		"parents": [
			["4abc238d9592586b17daad1ae619f816a3a39e66", 34, 0]
		],
		"login": "jrburke"
	}, {
		"message": "starting rejuvenate command",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a215d1f6b4ce5219f0989205f65e0653b8d8dada",
		"date": "2012-01-01 15:59:47",
		"author": "jrburke",
		"time": 36,
		"parents": [
			["b0acec5ffe0a801e0218ce412c9d6d1712865290", 35, 0]
		],
		"login": "jrburke"
	}, {
		"message": "creating dist dir to give rejuvenate a target.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a17852ef73d7934d1816a09f9cd06a3be15a2b05",
		"date": "2012-01-01 16:04:05",
		"author": "jrburke",
		"time": 37,
		"parents": [
			["a215d1f6b4ce5219f0989205f65e0653b8d8dada", 36, 0]
		],
		"login": "jrburke"
	}, {
		"message": "always force for rejuvenate",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e7d7abac42398b24bd1a501bc904d71045c731e1",
		"date": "2012-01-01 16:14:11",
		"author": "jrburke",
		"time": 38,
		"parents": [
			["a17852ef73d7934d1816a09f9cd06a3be15a2b05", 37, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Add in a help command and longer docs capability for commands via markdown file loaded by text plugin loader.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "271a3f9598035b4ffd447b012ac3dcd794a64d57",
		"date": "2012-01-01 22:07:30",
		"author": "jrburke",
		"time": 39,
		"parents": [
			["e7d7abac42398b24bd1a501bc904d71045c731e1", 38, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Pulled out archive resolution to its own module, should now allow for plain http/https urls to .tar.gz files to work for both create and add.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "78687018f32ca7bbeeb3972aaa19fc007fb0aacd",
		"date": "2012-01-02 00:03:55",
		"author": "jrburke",
		"time": 40,
		"parents": [
			["271a3f9598035b4ffd447b012ac3dcd794a64d57", 39, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Flesh out add docs, update code to match the description in the docs.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "0ed54208adf1ebb847088acb953c282787624756",
		"date": "2012-01-02 11:35:14",
		"author": "jrburke",
		"time": 41,
		"parents": [
			["78687018f32ca7bbeeb3972aaa19fc007fb0aacd", 40, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Docs for the commands.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "80d5eded5c77196e53f2971be98694c586f0d0ee",
		"date": "2012-01-02 12:52:57",
		"author": "jrburke",
		"time": 42,
		"parents": [
			["0ed54208adf1ebb847088acb953c282787624756", 41, 0]
		],
		"login": "jrburke"
	}, {
		"message": "switching to volojs/volo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5e02b2ea6c466f9f116da1ada36a1b0b94e47861",
		"date": "2012-01-02 13:23:32",
		"author": "jrburke",
		"time": 43,
		"parents": [
			["80d5eded5c77196e53f2971be98694c586f0d0ee", 42, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Only use the first part of the ID, for cases where the command is inside a folder with a main.js",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b48f85f8a81a5e8dc2132da257f6bd153f20a865",
		"date": "2012-01-02 14:54:28",
		"author": "jrburke",
		"time": 44,
		"parents": [
			["5e02b2ea6c466f9f116da1ada36a1b0b94e47861", 43, 0]
		],
		"login": "jrburke"
	}, {
		"message": "add an amdify for simple wrapping of JS scripts that use browser globals but have implicit dependencies that need to be made explicit.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b5f585cf91a67240e103a75c8c45459dbc27ac89",
		"date": "2012-01-02 16:22:35",
		"author": "jrburke",
		"time": 45,
		"parents": [
			["b48f85f8a81a5e8dc2132da257f6bd153f20a865", 44, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Adding symlink: archive value support.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "55d6d7446a6ba54baec6fc9d218cdd07b1d41c66",
		"date": "2012-01-02 21:31:40",
		"author": "jrburke",
		"time": 46,
		"parents": [
			["b5f585cf91a67240e103a75c8c45459dbc27ac89", 45, 0]
		],
		"login": "jrburke"
	}, {
		"message": "dist update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "eadf81a77cf6b6dabde2cd31f84881f516f97545",
		"date": "2012-01-02 21:46:22",
		"author": "jrburke",
		"time": 47,
		"parents": [
			["55d6d7446a6ba54baec6fc9d218cdd07b1d41c66", 46, 0]
		],
		"login": "jrburke"
	}, {
		"message": "add version info to the file and command output.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "20a5a7f2bbbc5956128474bf0f01f2155b25dc7d",
		"date": "2012-01-02 21:55:34",
		"author": "jrburke",
		"time": 48,
		"parents": [
			["eadf81a77cf6b6dabde2cd31f84881f516f97545", 47, 0]
		],
		"login": "jrburke"
	}, {
		"message": "add license, fix directory install bug with amd adapter module, update volo.js",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "67de10e32f107abe32145ada701e2c89ffd3e98f",
		"date": "2012-01-02 22:22:30",
		"author": "jrburke",
		"time": 49,
		"parents": [
			["20a5a7f2bbbc5956128474bf0f01f2155b25dc7d", 48, 0]
		],
		"login": "jrburke"
	}, {
		"message": "more docs",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d6308252067a36c511b052d71e2b041b36e2252c",
		"date": "2012-01-02 23:11:46",
		"author": "jrburke",
		"time": 50,
		"parents": [
			["67de10e32f107abe32145ada701e2c89ffd3e98f", 49, 0]
		],
		"login": "jrburke"
	}, {
		"message": "more docs",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8eb18d307ccb46e375c56c6b98c18d4d7e3ae55f",
		"date": "2012-01-02 23:14:56",
		"author": "jrburke",
		"time": 51,
		"parents": [
			["d6308252067a36c511b052d71e2b041b36e2252c", 50, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Doc updates, fix archive path for create template",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f0ce14325fd0a40891f43a03e9ed31a8dca40b3d",
		"date": "2012-01-02 23:25:57",
		"author": "jrburke",
		"time": 52,
		"parents": [
			["8eb18d307ccb46e375c56c6b98c18d4d7e3ae55f", 51, 0]
		],
		"login": "jrburke"
	}, {
		"message": "volo.js dist update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f25a5505eeea4288c139af3d3b3d31fa422b67a3",
		"date": "2012-01-02 23:26:51",
		"author": "jrburke",
		"time": 53,
		"parents": [
			["f0ce14325fd0a40891f43a03e9ed31a8dca40b3d", 52, 0]
		],
		"login": "jrburke"
	}, {
		"message": "remove package.json requirement from add",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "9f9fda98358ba0a8e657e248312aaea088e620b5",
		"date": "2012-01-02 23:34:23",
		"author": "jrburke",
		"time": 54,
		"parents": [
			["f25a5505eeea4288c139af3d3b3d31fa422b67a3", 53, 0]
		],
		"login": "jrburke"
	}, {
		"message": "doc updates, 0.0.1 tag.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f602a769d3819903bc263738da340b451257fe73",
		"date": "2012-01-02 23:43:52",
		"author": "jrburke",
		"time": 55,
		"parents": [
			["9f9fda98358ba0a8e657e248312aaea088e620b5", 54, 0]
		],
		"login": "jrburke"
	}, {
		"message": "doc update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d567c1871e7b53ea9c8fc86c5058ca90e02a9b47",
		"date": "2012-01-02 23:58:43",
		"author": "jrburke",
		"time": 56,
		"parents": [
			["f602a769d3819903bc263738da340b451257fe73", 55, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Support create using a local directory as the template. Also playing around with doing a series of steps of promises.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "9b2ad0b2ec3999fb079ed6213138499fc8eb1a7e",
		"date": "2012-01-08 23:50:55",
		"author": "jrburke",
		"time": 57,
		"parents": [
			["d567c1871e7b53ea9c8fc86c5058ca90e02a9b47", 56, 0]
		],
		"login": "jrburke"
	}, {
		"message": "misc checkpoint commit: rename fileUtil to file, rework some q usage, store path used for volo.js in config, start unit test for create, but the test is not working yet.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "fea75c7e801b9b3d9dafb4d51e4415eb029c2bbe",
		"date": "2012-01-09 15:02:13",
		"author": "jrburke",
		"time": 58,
		"parents": [
			["9b2ad0b2ec3999fb079ed6213138499fc8eb1a7e", 57, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Modifying q so that it throws if shouldCatch() is called with true, so that there are usable error stacks when the tests have an error. Need to circle back to q repo and ask more about this.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "9ad0ed2513fd201995cfe4ad27c36a535dba7698",
		"date": "2012-01-09 19:52:41",
		"author": "jrburke",
		"time": 59,
		"parents": [
			["fea75c7e801b9b3d9dafb4d51e4415eb029c2bbe", 58, 0]
		],
		"login": "jrburke"
	}, {
		"message": "get tests working better with promises, first successful create command test.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "17f2fc6ba82126dfcc9d003dd5dae1be8011fbcc",
		"date": "2012-01-09 20:46:46",
		"author": "jrburke",
		"time": 60,
		"parents": [
			["9ad0ed2513fd201995cfe4ad27c36a535dba7698", 59, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Convert to serial tests by using promise chains, then at the top of the tests, serialize the promise chains, and use .end() to get any errors generated along the chains.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f0e99e6bd320303a06ae6e77fc76ec36db4fe15d",
		"date": "2012-01-10 13:04:44",
		"author": "jrburke",
		"time": 61,
		"parents": [
			["17f2fc6ba82126dfcc9d003dd5dae1be8011fbcc", 60, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Revert \"Modifying q so that it throws if shouldCatch() is called with true, so that there are usable error stacks when the tests have an error. Need to circle back to q repo and ask more about this.\"",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ed600ac8eb6f1222dbea92855c1d554a5e02dc43",
		"date": "2012-01-10 13:07:30",
		"author": "jrburke",
		"time": 62,
		"parents": [
			["f0e99e6bd320303a06ae6e77fc76ec36db4fe15d", 61, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Adjust test output directory a bit.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a1dea68b953036e0edd3cdac2cdc40024f8f2459",
		"date": "2012-01-10 13:10:36",
		"author": "jrburke",
		"time": 63,
		"parents": [
			["ed600ac8eb6f1222dbea92855c1d554a5e02dc43", 62, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #11, allow relative symlink and local paths to work.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "20f9e20fa403b23f698095cf071bda2ed31d2b93",
		"date": "2012-01-10 14:13:59",
		"author": "jrburke",
		"time": 64,
		"parents": [
			["a1dea68b953036e0edd3cdac2cdc40024f8f2459", 63, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Start support for volofile. Still has rough edges",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "dc330e8723dcc045c45205a802d4ccabdd8e969b",
		"date": "2012-01-10 17:05:49",
		"author": "jrburke",
		"time": 65,
		"parents": [
			["20f9e20fa403b23f698095cf071bda2ed31d2b93", 64, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Created v, a helper to do shell-like tasks in a volofile. Added test.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "53fc47272d051ed2f1c225a88290f8eb3a5e5bb1",
		"date": "2012-01-10 19:37:47",
		"author": "jrburke",
		"time": 66,
		"parents": [
			["dc330e8723dcc045c45205a802d4ccabdd8e969b", 65, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Improving the amdify to allow specifying an exports value. If so and the exports support noConflict() it will be called. Changed amdify args to be named args instead of positional.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "07eb2b52df1393b0611b5f19197925f5da515559",
		"date": "2012-01-12 21:36:12",
		"author": "jrburke",
		"time": 67,
		"parents": [
			["53fc47272d051ed2f1c225a88290f8eb3a5e5bb1", 66, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update built volo.js",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "2d163e24861c77bea67be60515320a74ebc782ea",
		"date": "2012-01-12 21:38:27",
		"author": "jrburke",
		"time": 68,
		"parents": [
			["07eb2b52df1393b0611b5f19197925f5da515559", 67, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Do content insertion differently, regexp replacement can be foiled by inline contents.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "73f0b928eeda3225b0641920d6a33c176d451ac2",
		"date": "2012-01-12 22:21:31",
		"author": "jrburke",
		"time": 69,
		"parents": [
			["2d163e24861c77bea67be60515320a74ebc782ea", 68, 0]
		],
		"login": "jrburke"
	}, {
		"message": "HULK NO SPELL",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "9ef3dd575cd2496c23eaf2ca62276b9e7842b326",
		"date": "2012-01-12 22:28:02",
		"author": "jrburke",
		"time": 70,
		"parents": [
			["73f0b928eeda3225b0641920d6a33c176d451ac2", 69, 0]
		],
		"login": "jrburke"
	}, {
		"message": "allow optional noConflict option for amdify, and update README for bootstrapping an underscore/backbone project with AMD. Getting ready to tag 0.0.2 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8b4e75ff99db69a52558d635b643334ce96eb25d",
		"date": "2012-01-12 23:09:59",
		"author": "jrburke",
		"time": 71,
		"parents": [
			["9ef3dd575cd2496c23eaf2ca62276b9e7842b326", 70, 0]
		],
		"login": "jrburke"
	}, {
		"message": "update dist for 0.0.2",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "043845057b22a1a2803d31892859a487a9f9dcc5",
		"date": "2012-01-12 23:10:54",
		"author": "jrburke",
		"time": 72,
		"parents": [
			["8b4e75ff99db69a52558d635b643334ce96eb25d", 71, 0]
		],
		"login": "jrburke"
	}, {
		"message": "updating readme",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a69833c6b6655f74a84379b017e661b6dac747d6",
		"date": "2012-01-12 23:13:37",
		"author": "jrburke",
		"time": 73,
		"parents": [
			["043845057b22a1a2803d31892859a487a9f9dcc5", 72, 0]
		],
		"login": "jrburke"
	}, {
		"message": "add command will use amdify if amdify named args are passed with -amd flag.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "93a6fb173562f4ab6c5d17f82fe754a6218db8c0",
		"date": "2012-01-13 12:53:34",
		"author": "jrburke",
		"time": 74,
		"parents": [
			["a69833c6b6655f74a84379b017e661b6dac747d6", 73, 0]
		],
		"login": "jrburke"
	}, {
		"message": "more file system commands for v.js",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e2b72a210776f07d71a2e97d7f4c90f507fb553b",
		"date": "2012-01-13 14:09:39",
		"author": "jrburke",
		"time": 75,
		"parents": [
			["93a6fb173562f4ab6c5d17f82fe754a6218db8c0", 74, 0]
		],
		"login": "jrburke"
	}, {
		"message": "0.0.3 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "de3c834bcc85063cda72259c6e56b01b940591ff",
		"date": "2012-01-13 14:25:43",
		"author": "jrburke",
		"time": 76,
		"parents": [
			["e2b72a210776f07d71a2e97d7f4c90f507fb553b", 75, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Change add logic to parse package.json main's js file, and if have relative deps, then keep whole directory. Otherwise, just install the main .js file.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "92ac65656559cc47d2a5bf1b597634cebb7f8945",
		"date": "2012-01-15 13:30:12",
		"author": "jrburke",
		"time": 77,
		"parents": [
			["de3c834bcc85063cda72259c6e56b01b940591ff", 76, 0]
		],
		"login": "jrburke"
	}, {
		"message": "readme update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "36be1009f99655c1fe01f82225214db1b626bf84",
		"date": "2012-01-22 22:47:34",
		"author": "jrburke",
		"time": 78,
		"parents": [
			["92ac65656559cc47d2a5bf1b597634cebb7f8945", 77, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update to requirejs 1.0.5",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8677fe620d268a2105098e76829276edf541dbbd",
		"date": "2012-01-28 19:53:23",
		"author": "jrburke",
		"time": 79,
		"parents": [
			["36be1009f99655c1fe01f82225214db1b626bf84", 78, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Favor volofile command over global commands if they are in there, make the volofile and volo command code call into same basic code in volo/commands. Now all commands get a v instance. Start of a v.prompt() but does not work correctly yet.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d53df6f2324e5288ad75200136fdcd4d247d35f1",
		"date": "2012-01-28 23:28:52",
		"author": "jrburke",
		"time": 80,
		"parents": [
			["8677fe620d268a2105098e76829276edf541dbbd", 79, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Seem to have a usable v.prompt() now.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "1d1244dde6484d8dc08df3ba5ae1383d047858bc",
		"date": "2012-01-29 16:40:22",
		"author": "jrburke",
		"time": 81,
		"parents": [
			["d53df6f2324e5288ad75200136fdcd4d247d35f1", 80, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Use ast to find out if a lib is already amdified, fix hang by not using stdin stuff in v.js unless asked.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "db353d4b218a144fe83a6e1a41a2567669df92cd",
		"date": "2012-01-30 21:31:20",
		"author": "jrburke",
		"time": 82,
		"parents": [
			["1d1244dde6484d8dc08df3ba5ae1383d047858bc", 81, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8df974456eb40ea872d4de749e32057ac2c53af0",
		"date": "2012-01-30 21:32:00",
		"author": "jrburke",
		"time": 83,
		"parents": [
			["db353d4b218a144fe83a6e1a41a2567669df92cd", 82, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Changed amdify's depend= to depends=, lots of updates to know when to wrap in AMD and what kind of wrapper to use. Fix using local directories with fragment IDs for archive URLs.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7423f0db9e3396e562c5c5ca7299e6a232c0eaaf",
		"date": "2012-01-31 19:29:26",
		"author": "jrburke",
		"time": 84,
		"parents": [
			["8df974456eb40ea872d4de749e32057ac2c53af0", 83, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update tests to latest code, prep for 0.0.4 tag.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "dc682a9829d5e7b94b9c6d1b43b3e4719ac690b8",
		"date": "2012-01-31 21:16:02",
		"author": "jrburke",
		"time": 85,
		"parents": [
			["7423f0db9e3396e562c5c5ca7299e6a232c0eaaf", 84, 0]
		],
		"login": "jrburke"
	}, {
		"message": "update version on readme",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "3ae02d42fae26e38455a3c11a850e0eff755d1df",
		"date": "2012-01-31 22:12:44",
		"author": "jrburke",
		"time": 86,
		"parents": [
			["dc682a9829d5e7b94b9c6d1b43b3e4719ac690b8", 85, 0]
		],
		"login": "jrburke"
	}, {
		"message": "add v.command(), make sure v relativePath is set correctly, if volofile does not have the comand, try global/top commands from volo/main.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e8a34b2b4c3890e7760ee1d9daae81cb3fc3fbb1",
		"date": "2012-02-03 16:23:14",
		"author": "jrburke",
		"time": 87,
		"parents": [
			["3ae02d42fae26e38455a3c11a850e0eff755d1df", 86, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "042b73f3decaf7dceac57b2e79ba1cba017d775c",
		"date": "2012-02-03 16:28:13",
		"author": "jrburke",
		"time": 88,
		"parents": [
			["e8a34b2b4c3890e7760ee1d9daae81cb3fc3fbb1", 87, 0]
		],
		"login": "jrburke"
	}, {
		"message": "add v.exec for calling shell",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "0f76ed8ae5edeba438cd523acb7310163a495f22",
		"date": "2012-02-03 22:02:39",
		"author": "jrburke",
		"time": 89,
		"parents": [
			["042b73f3decaf7dceac57b2e79ba1cba017d775c", 88, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "6d4215526410c04832467aa491b1513f8bd00f83",
		"date": "2012-02-03 22:03:14",
		"author": "jrburke",
		"time": 90,
		"parents": [
			["0f76ed8ae5edeba438cd523acb7310163a495f22", 89, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Make sure v.rm returns a promise since it can be async at the moment, log out the output from a v.exec() call. Snapshot update.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "592a7c625e327bcac153cf7f8cc19c2b659ac178",
		"date": "2012-02-04 22:36:35",
		"author": "jrburke",
		"time": 91,
		"parents": [
			["6d4215526410c04832467aa491b1513f8bd00f83", 90, 0]
		],
		"login": "jrburke"
	}, {
		"message": "introduce v.spawn for streaming output.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d7ec3954a3c355ad9b4fedfe4f6cded79de8e9de",
		"date": "2012-02-06 14:18:53",
		"author": "jrburke",
		"time": 92,
		"parents": [
			["592a7c625e327bcac153cf7f8cc19c2b659ac178", 91, 0]
		],
		"login": "jrburke"
	}, {
		"message": "change file.rmdir to file.rm, use sync fs methods and recursion instead of a child process. Should help make rm portable to Windows for issue #1.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a591ca397ce3f032d2143fd6b644aea245805f7b",
		"date": "2012-02-06 17:55:51",
		"author": "jrburke",
		"time": 93,
		"parents": [
			["d7ec3954a3c355ad9b4fedfe4f6cded79de8e9de", 92, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Adding an npmrel command that makes a nested node_modules setup use relative requires. Still pretty fresh.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "347d3a1a1b84dce16eeb0866d8c300d19464c7c9",
		"date": "2012-02-07 17:57:45",
		"author": "jrburke",
		"time": 94,
		"parents": [
			["a591ca397ce3f032d2143fd6b644aea245805f7b", 93, 0]
		],
		"login": "jrburke"
	}, {
		"message": "abandon hope all ye who enter",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a4ad446fec5da08d13ed472bf1a460875fd13666",
		"date": "2012-02-07 19:32:19",
		"author": "jrburke",
		"time": 95,
		"parents": [
			["347d3a1a1b84dce16eeb0866d8c300d19464c7c9", 94, 0]
		],
		"login": "jrburke"
	}, {
		"message": "small cleanup, but get invalid tar file",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b244af90a92f3be8fc303a4d1895411a15b05e22",
		"date": "2012-02-07 22:37:12",
		"author": "jrburke",
		"time": 96,
		"parents": [
			["a4ad446fec5da08d13ed472bf1a460875fd13666", 95, 1]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "6f71ec89b51dcbc2b9f6cd37234b3f938e5966de",
		"date": "2012-02-08 11:13:37",
		"author": "jrburke",
		"time": 97,
		"parents": [
			["347d3a1a1b84dce16eeb0866d8c300d19464c7c9", 94, 0]
		],
		"login": "jrburke"
	}, {
		"message": "More changes to get new volo name to work.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d33d9ea5b0d2859728c976e2ef5d38e2a42d5c0b",
		"date": "2012-02-08 16:30:47",
		"author": "jrburke",
		"time": 98,
		"parents": [
			["6f71ec89b51dcbc2b9f6cd37234b3f938e5966de", 97, 0]
		],
		"login": "jrburke"
	}, {
		"message": "revving version for release",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "3b4ea586e5be4417fec3efe4fab4d9ede969d2dc",
		"date": "2012-02-08 16:45:21",
		"author": "jrburke",
		"time": 99,
		"parents": [
			["d33d9ea5b0d2859728c976e2ef5d38e2a42d5c0b", 98, 0]
		],
		"login": "jrburke"
	}, {
		"message": "update snapshot for release",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "695f0dca33be7a180b77787ed1aa124dd1e049ac",
		"date": "2012-02-08 16:46:14",
		"author": "jrburke",
		"time": 100,
		"parents": [
			["3b4ea586e5be4417fec3efe4fab4d9ede969d2dc", 99, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Switching from tar.gz to zip in hopes of getting operational on windows.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c5e5808d296d6388447ea8d85ce3274c8ffe4c7b",
		"date": "2012-02-09 23:29:50",
		"author": "jrburke",
		"time": 101,
		"parents": [
			["695f0dca33be7a180b77787ed1aa124dd1e049ac", 100, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Clean up .then usage in create, some small tweaks.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c91163e09391995a4be21a05f305316b7c03fbac",
		"date": "2012-02-10 11:55:40",
		"author": "jrburke",
		"time": 102,
		"parents": [
			["c5e5808d296d6388447ea8d85ce3274c8ffe4c7b", 101, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "03ec3cd1428948e2c6ade0a2ea705240670263b6",
		"date": "2012-02-10 11:56:00",
		"author": "jrburke",
		"time": 103,
		"parents": [
			["c91163e09391995a4be21a05f305316b7c03fbac", 102, 0]
		],
		"login": "jrburke"
	}, {
		"message": "small tweaks so that hopefully I'm using the APIs right and it will work on windows.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d8d7941f673e086bf11b31dc97f783bce5293a8c",
		"date": "2012-02-10 14:31:13",
		"author": "jrburke",
		"time": 104,
		"parents": [
			["03ec3cd1428948e2c6ade0a2ea705240670263b6", 103, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f3c593d52d339d698778590157326b06a27ea508",
		"date": "2012-02-10 14:31:25",
		"author": "jrburke",
		"time": 105,
		"parents": [
			["d8d7941f673e086bf11b31dc97f783bce5293a8c", 104, 0]
		],
		"login": "jrburke"
	}, {
		"message": "adding in a platform-specific shell call to do rm -f action because windows is awesome.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "2442b31fe4064b3a77f6fb97af15aad777378b21",
		"date": "2012-02-10 15:48:34",
		"author": "jrburke",
		"time": 106,
		"parents": [
			["f3c593d52d339d698778590157326b06a27ea508", 105, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Trying rimraf for windows rm problems.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "089eb805c9ade904df5244703ba34c36bbd41b1f",
		"date": "2012-02-10 17:05:57",
		"author": "jrburke",
		"time": 107,
		"parents": [
			["2442b31fe4064b3a77f6fb97af15aad777378b21", 106, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "836e78ec6bd6ae859fbc9543ff7009b18c2e7f2f",
		"date": "2012-02-10 17:06:17",
		"author": "jrburke",
		"time": 108,
		"parents": [
			["089eb805c9ade904df5244703ba34c36bbd41b1f", 107, 0]
		],
		"login": "jrburke"
	}, {
		"message": "revert rimraf addition, just go with dumping stuff in the os tempdir, and if it does not get deleted (most likely windows), do not worry the user about it.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "4a78a9ccbc5bf22bd11db1c6690a80cd4f76e9b1",
		"date": "2012-02-10 17:31:34",
		"author": "jrburke",
		"time": 109,
		"parents": [
			["836e78ec6bd6ae859fbc9543ff7009b18c2e7f2f", 108, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "cfa03aceecdd5581b0191919543e2fd8f6d69194",
		"date": "2012-02-10 17:31:57",
		"author": "jrburke",
		"time": 110,
		"parents": [
			["4a78a9ccbc5bf22bd11db1c6690a80cd4f76e9b1", 109, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update some volo.js references to just volo in the docs.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "44bf2f5a5d2de994b4d7bb97a8a36e7a81f1f137",
		"date": "2012-02-10 17:39:59",
		"author": "jrburke",
		"time": 111,
		"parents": [
			["cfa03aceecdd5581b0191919543e2fd8f6d69194", 110, 0]
		],
		"login": "jrburke"
	}, {
		"message": "update docs for windows.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "fe5d55eee91e8f201d5ab59f0877e8361ab05b0f",
		"date": "2012-02-10 17:46:19",
		"author": "jrburke",
		"time": 112,
		"parents": [
			["44bf2f5a5d2de994b4d7bb97a8a36e7a81f1f137", 111, 0]
		],
		"login": "jrburke"
	}, {
		"message": "prep for 0.0.6 release for windows.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "236c18b685dee29d6c558a34da856aba08ad7286",
		"date": "2012-02-10 17:49:24",
		"author": "jrburke",
		"time": 113,
		"parents": [
			["fe5d55eee91e8f201d5ab59f0877e8361ab05b0f", 112, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update for 0.0.6",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b0941a001c19b087e56b84bcc80179700384aea6",
		"date": "2012-02-10 17:50:10",
		"author": "jrburke",
		"time": 114,
		"parents": [
			["236c18b685dee29d6c558a34da856aba08ad7286", 113, 0]
		],
		"login": "jrburke"
	}, {
		"message": "doc update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a290284f8349bd701ac52b597c2feada1c032d6a",
		"date": "2012-02-10 17:53:33",
		"author": "jrburke",
		"time": 115,
		"parents": [
			["b0941a001c19b087e56b84bcc80179700384aea6", 114, 0]
		],
		"login": "jrburke"
	}, {
		"message": "doc update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "dd17805b7de66859e5afacb751968d65d858c064",
		"date": "2012-02-10 17:53:58",
		"author": "jrburke",
		"time": 116,
		"parents": [
			["a290284f8349bd701ac52b597c2feada1c032d6a", 115, 0]
		],
		"login": "jrburke"
	}, {
		"message": "restored file permissions after rejuvenate",
		"space": 1,
		"gravatar": "6bdfb79d08504f6f90ea2716fae9231c",
		"id": "0394082509ec5716738606d0479281e5b462d6e2",
		"date": "2012-02-11 10:42:52",
		"author": "Jason Strimpel",
		"time": 117,
		"parents": [
			["695f0dca33be7a180b77787ed1aa124dd1e049ac", 100, 0]
		],
		"login": "jstrimpel"
	}, {
		"message": "Allow flags to be passed to subcommands, allow v.command() to use command line args if no explicit args are given. Update r.js to master.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e719922a1cea48e13e04222bbc423eb660c370a0",
		"date": "2012-02-12 22:04:01",
		"author": "jrburke",
		"time": 118,
		"parents": [
			["dd17805b7de66859e5afacb751968d65d858c064", 116, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "1622fc53cd1cfcc1600e267a2ebaaccdf5941b97",
		"date": "2012-02-12 22:04:17",
		"author": "jrburke",
		"time": 119,
		"parents": [
			["e719922a1cea48e13e04222bbc423eb660c370a0", 118, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update to requirejs 1.0.6",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "31fae08a250b4b12a5fc43cc23fc7190b860a211",
		"date": "2012-02-13 14:12:31",
		"author": "jrburke",
		"time": 120,
		"parents": [
			["1622fc53cd1cfcc1600e267a2ebaaccdf5941b97", 119, 0]
		],
		"login": "jrburke"
	}, {
		"message": "allow options to be optional.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "0bbb37ed3134a36eefee0068d1763dd94569ec39",
		"date": "2012-02-14 15:57:44",
		"author": "jrburke",
		"time": 121,
		"parents": [
			["31fae08a250b4b12a5fc43cc23fc7190b860a211", 120, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update for 0.0.7 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ff74659a7f7d15243312ef49933d787dac39e433",
		"date": "2012-02-14 16:25:35",
		"author": "jrburke",
		"time": 122,
		"parents": [
			["0bbb37ed3134a36eefee0068d1763dd94569ec39", 121, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Merge pull request #13 from jstrimpel/rejuvenate",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "523be223dbcabc9400de98efee8689c0d7e431f2",
		"date": "2012-02-14 18:50:12",
		"author": "James Burke",
		"time": 123,
		"parents": [
			["ff74659a7f7d15243312ef49933d787dac39e433", 122, 0],
			["0394082509ec5716738606d0479281e5b462d6e2", 117, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Streamline rejuvenate mode detection, update to latest jslint rules.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d959c3e6e9f329a5a022df7f9b0eb574de29df23",
		"date": "2012-02-14 18:55:12",
		"author": "jrburke",
		"time": 124,
		"parents": [
			["523be223dbcabc9400de98efee8689c0d7e431f2", 123, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "89b003977733067d46fdfcf9dc895cc047d99fe1",
		"date": "2012-02-14 18:55:53",
		"author": "jrburke",
		"time": 125,
		"parents": [
			["d959c3e6e9f329a5a022df7f9b0eb574de29df23", 124, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Allow setting local names for amdified depends= dependencies.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ee10b0f95141226a51cbb11e01a9b24e75bf260b",
		"date": "2012-02-15 17:15:46",
		"author": "jrburke",
		"time": 126,
		"parents": [
			["89b003977733067d46fdfcf9dc895cc047d99fe1", 125, 0]
		],
		"login": "jrburke"
	}, {
		"message": "prep for 0.0.8 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "df915f30c21c9c121ed8294516efbda31435cae6",
		"date": "2012-02-15 17:18:39",
		"author": "jrburke",
		"time": 127,
		"parents": [
			["ee10b0f95141226a51cbb11e01a9b24e75bf260b", 126, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ee72000222c4213eaf0583aae192967942ddfbe4",
		"date": "2012-02-15 17:20:48",
		"author": "jrburke",
		"time": 128,
		"parents": [
			["df915f30c21c9c121ed8294516efbda31435cae6", 127, 0]
		],
		"login": "jrburke"
	}, {
		"message": "doc change update prompted from @dmose",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "aa8e888d2778072387973f17db6f6d3cca581b84",
		"date": "2012-02-21 16:16:50",
		"author": "jrburke",
		"time": 129,
		"parents": [
			["ee72000222c4213eaf0583aae192967942ddfbe4", 128, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Protect against a missing package.json",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5261c96484a1ef9165359cc3b63aa6845513dda0",
		"date": "2012-02-21 20:36:35",
		"author": "jrburke",
		"time": 130,
		"parents": [
			["aa8e888d2778072387973f17db6f6d3cca581b84", 129, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Rev version number to indicate master snapshot is past 0.0.8",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c4e505b6c365e9360742948dc0fa810343ff53a2",
		"date": "2012-02-22 14:11:29",
		"author": "jrburke",
		"time": 131,
		"parents": [
			["5261c96484a1ef9165359cc3b63aa6845513dda0", 130, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "12496ab75abe7a7b20a0a3484a22ef87487896ab",
		"date": "2012-02-22 14:11:50",
		"author": "jrburke",
		"time": 132,
		"parents": [
			["c4e505b6c365e9360742948dc0fa810343ff53a2", 131, 0]
		],
		"login": "jrburke"
	}, {
		"message": "fix link typo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "90a9c229429304c01c714e954d92293150ddb744",
		"date": "2012-03-01 14:34:41",
		"author": "jrburke",
		"time": 133,
		"parents": [
			["12496ab75abe7a7b20a0a3484a22ef87487896ab", 132, 0]
		],
		"login": "jrburke"
	}, {
		"message": "fix link typo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5fea9dcb7280f79513249f9b7bab67d3a1f645f7",
		"date": "2012-03-01 14:40:36",
		"author": "jrburke",
		"time": 134,
		"parents": [
			["90a9c229429304c01c714e954d92293150ddb744", 133, 0]
		],
		"login": "jrburke"
	}, {
		"message": "volo add will now run a volofile onAdd command if it exists in the directory of the item that has been added/installed.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "eae45a533fd041c910636c7d99a90ae1e35f880a",
		"date": "2012-03-01 17:10:40",
		"author": "jrburke",
		"time": 135,
		"parents": [
			["5fea9dcb7280f79513249f9b7bab67d3a1f645f7", 134, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Expanding capabilities of volo/packageJson, updating some tests to latest jslint, prepping for more packageJson tests.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5a22f4367efec3b45efb77efcf4d19450975e02c",
		"date": "2012-03-03 15:25:09",
		"author": "jrburke",
		"time": 136,
		"parents": [
			["eae45a533fd041c910636c7d99a90ae1e35f880a", 135, 0]
		],
		"login": "jrburke"
	}, {
		"message": "More tests for volo/packageJson",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "fe088c13aa9765126e19f5769a7610e74854d339",
		"date": "2012-03-05 21:10:54",
		"author": "jrburke",
		"time": 137,
		"parents": [
			["5a22f4367efec3b45efb77efcf4d19450975e02c", 136, 0]
		],
		"login": "jrburke"
	}, {
		"message": "If the project has a package.json then stamp it with the added volo dependency.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c2b97215f4d480fd56f13f14bb8829440a1830fe",
		"date": "2012-03-06 18:16:16",
		"author": "jrburke",
		"time": 138,
		"parents": [
			["fe088c13aa9765126e19f5769a7610e74854d339", 137, 0]
		],
		"login": "jrburke"
	}, {
		"message": "First pass at a search command.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "84189bc36c3e432997417ae174754e31efeb1558",
		"date": "2012-03-06 19:37:00",
		"author": "jrburke",
		"time": 139,
		"parents": [
			["c2b97215f4d480fd56f13f14bb8829440a1830fe", 138, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Use search for add/create, so now 'volo add jquery' works.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e61f5cccff407271a2acaa571c6bb52a0a48dfce",
		"date": "2012-03-06 22:56:51",
		"author": "jrburke",
		"time": 140,
		"parents": [
			["84189bc36c3e432997417ae174754e31efeb1558", 139, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "32db9f359e0614f5af24ac70b4138c2f1cc07c6e",
		"date": "2012-03-06 22:58:59",
		"author": "jrburke",
		"time": 141,
		"parents": [
			["e61f5cccff407271a2acaa571c6bb52a0a48dfce", 140, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Allow for amd overrides for some libraries for search, but only if amd is preferred.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ac92c5b925607b11d83c117d1265a2c766a1363a",
		"date": "2012-03-07 14:51:13",
		"author": "jrburke",
		"time": 142,
		"parents": [
			["32db9f359e0614f5af24ac70b4138c2f1cc07c6e", 141, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Start support for volo.archive and volo.url in a package.json and in overrides to specify download locations.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "fa56f8382fb7ee03aaf9fead632e60775148c2e9",
		"date": "2012-03-07 17:58:40",
		"author": "jrburke",
		"time": 143,
		"parents": [
			["ac92c5b925607b11d83c117d1265a2c766a1363a", 142, 0]
		],
		"login": "jrburke"
	}, {
		"message": "some small cleanup, add override for ember.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "990fe0565b4679919a68c8c23204c4bf760e55a2",
		"date": "2012-03-07 21:45:38",
		"author": "jrburke",
		"time": 144,
		"parents": [
			["fa56f8382fb7ee03aaf9fead632e60775148c2e9", 143, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Prompt developer for dependencies and exports for non AMD/CJS additions when in an AMD project. This is a work in progress, not smooth yet.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "acaf20935c30c7884bf9346f75408e9408a43888",
		"date": "2012-03-07 23:18:03",
		"author": "jrburke",
		"time": 145,
		"parents": [
			["990fe0565b4679919a68c8c23204c4bf760e55a2", 144, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Convert amdify's convert method to be promise-based so that it can prompt the user for dependencies in the AMD case.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8238a5183f52f2db0505c670070e7dbde140f01f",
		"date": "2012-03-08 13:15:50",
		"author": "jrburke",
		"time": 146,
		"parents": [
			["acaf20935c30c7884bf9346f75408e9408a43888", 145, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Change .util objects in some commands to .api objects, improve searching when a . is used, and give info on how to do better searching using the github web site.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "75ed128ea40c557186f9280e770e1dc8e78015c0",
		"date": "2012-03-08 13:35:12",
		"author": "jrburke",
		"time": 147,
		"parents": [
			["8238a5183f52f2db0505c670070e7dbde140f01f", 146, 0]
		],
		"login": "jrburke"
	}, {
		"message": "fix up zip URL installs, better messaging on what file is being converted to AMD, fix multiple file conversion in amdify.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b9069d553b04d5d9ed79d868371da414045d5331",
		"date": "2012-03-08 14:46:59",
		"author": "jrburke",
		"time": 148,
		"parents": [
			["75ed128ea40c557186f9280e770e1dc8e78015c0", 147, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "1fd177835e81ded2e962785de3ce63e744ba1a38",
		"date": "2012-03-08 15:14:28",
		"author": "jrburke",
		"time": 149,
		"parents": [
			["b9069d553b04d5d9ed79d868371da414045d5331", 148, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #15, volo rejuvenate failed when outside volo parent.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c8709b77eab4a2ad77a023f0afb957a5c0402706",
		"date": "2012-03-08 15:28:10",
		"author": "jrburke",
		"time": 150,
		"parents": [
			["1fd177835e81ded2e962785de3ce63e744ba1a38", 149, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "446e9ce4075bbe8931d7beb9e775f983b9211024",
		"date": "2012-03-08 15:28:30",
		"author": "jrburke",
		"time": 151,
		"parents": [
			["c8709b77eab4a2ad77a023f0afb957a5c0402706", 150, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update npmrel to use promises returned from amdify.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "93fb42c4ed8b9308fc4ae02c35d3072c5a18402f",
		"date": "2012-03-08 16:02:38",
		"author": "jrburke",
		"time": 152,
		"parents": [
			["446e9ce4075bbe8931d7beb9e775f983b9211024", 151, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "9f6093499378b4a24ab4b8d8fdab97c3c91cd2c0",
		"date": "2012-03-08 16:02:52",
		"author": "jrburke",
		"time": 153,
		"parents": [
			["93fb42c4ed8b9308fc4ae02c35d3072c5a18402f", 152, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Updates for a 0.0.9 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "57773ecdd713e8d22cd81be0ff34e208d966b11e",
		"date": "2012-03-08 17:32:06",
		"author": "jrburke",
		"time": 154,
		"parents": [
			["9f6093499378b4a24ab4b8d8fdab97c3c91cd2c0", 153, 0]
		],
		"login": "jrburke"
	}, {
		"message": "More best practices examples.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f2fd1c0af4fecb78f7d914fc4ef88b0739fbe22a",
		"date": "2012-03-08 22:24:39",
		"author": "jrburke",
		"time": 155,
		"parents": [
			["57773ecdd713e8d22cd81be0ff34e208d966b11e", 154, 0]
		],
		"login": "jrburke"
	}, {
		"message": "doc updates",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "6bc09b93b78f46c6ea07ec36a3aec7241b0207b5",
		"date": "2012-03-08 22:36:45",
		"author": "jrburke",
		"time": 156,
		"parents": [
			["f2fd1c0af4fecb78f7d914fc4ef88b0739fbe22a", 155, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Moving some docs to the wiki",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "79389aa541076f9ec63c3787f0054856b91b57e1",
		"date": "2012-03-09 13:49:47",
		"author": "jrburke",
		"time": 157,
		"parents": [
			["6bc09b93b78f46c6ea07ec36a3aec7241b0207b5", 156, 0]
		],
		"login": "jrburke"
	}, {
		"message": "allow repo type overrides, specifically to allow dijit to get installed.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5d58fcaaab354e3ece1911204433ff6cb64a7cea",
		"date": "2012-03-09 15:32:45",
		"author": "jrburke",
		"time": 158,
		"parents": [
			["79389aa541076f9ec63c3787f0054856b91b57e1", 157, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Prep for 0.1.0 release",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "eedba297eb381d33698d2c797712f184a99ca08e",
		"date": "2012-03-09 17:52:43",
		"author": "jrburke",
		"time": 159,
		"parents": [
			["5d58fcaaab354e3ece1911204433ff6cb64a7cea", 158, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fix header",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "672ab4d24891f2c5bb9a2f071e368e75247f0a20",
		"date": "2012-03-09 17:55:05",
		"author": "jrburke",
		"time": 160,
		"parents": [
			["eedba297eb381d33698d2c797712f184a99ca08e", 159, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #17, make sure amdify.api.convert() has good default values for args, allow a -commonJs flag for amdify that is used by npmrel to always treat conversion like a CJS->AMD conversion.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "3e0a02fb8e1ae1fe79e948a5b602d5a116f0f6d5",
		"date": "2012-04-05 14:44:10",
		"author": "jrburke",
		"time": 161,
		"parents": [
			["672ab4d24891f2c5bb9a2f071e368e75247f0a20", 160, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7bb281264b2ce2a1b2acf110d6e11c3bf7158a4c",
		"date": "2012-04-05 14:44:29",
		"author": "jrburke",
		"time": 162,
		"parents": [
			["3e0a02fb8e1ae1fe79e948a5b602d5a116f0f6d5", 161, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fix Library Best Practices link in README.md",
		"space": 2,
		"gravatar": "5fc12408fadb9e53ab2d50c872f98f99",
		"id": "70ae3683ad27fd6c85addcc3d2b001d23ac528e5",
		"date": "2012-04-08 01:05:13",
		"author": "Zak Johnson",
		"time": 163,
		"parents": [
			["7bb281264b2ce2a1b2acf110d6e11c3bf7158a4c", 162, 0]
		],
		"login": "zakj"
	}, {
		"message": "Merge pull request #18 from zakj/patch-1",
		"space": 2,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "eabbef2b92dfaceb66e9062f86a168051e68b3a2",
		"date": "2012-04-09 11:36:01",
		"author": "James Burke",
		"time": 164,
		"parents": [
			["7bb281264b2ce2a1b2acf110d6e11c3bf7158a4c", 162, 0],
			["70ae3683ad27fd6c85addcc3d2b001d23ac528e5", 163, 2]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #19, allow move operations to work across partitions.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d716dd983f50522c2d979eb3d51537192fd9118e",
		"date": "2012-04-13 17:55:22",
		"author": "jrburke",
		"time": 165,
		"parents": [
			["7bb281264b2ce2a1b2acf110d6e11c3bf7158a4c", 162, 0]
		],
		"login": "jrburke"
	}, {
		"message": "update version for release",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "00c6d6285434324f057c0d37cdf3ef5457e7ff82",
		"date": "2012-04-13 17:57:46",
		"author": "jrburke",
		"time": 166,
		"parents": [
			["d716dd983f50522c2d979eb3d51537192fd9118e", 165, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "503296a11fb7b71af9f657a90e2f50659da26dcb",
		"date": "2012-04-13 17:58:08",
		"author": "jrburke",
		"time": 167,
		"parents": [
			["00c6d6285434324f057c0d37cdf3ef5457e7ff82", 166, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Merge branch 'master' of github.com:volojs/volo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a7093be10aee7c239fb41b26965104936ef3628d",
		"date": "2012-04-13 17:58:39",
		"author": "jrburke",
		"time": 168,
		"parents": [
			["503296a11fb7b71af9f657a90e2f50659da26dcb", 167, 0],
			["eabbef2b92dfaceb66e9062f86a168051e68b3a2", 164, 2]
		],
		"login": "jrburke"
	}, {
		"message": "corrected slash direction for windows",
		"space": 1,
		"gravatar": "04c10c5611cac37844099ff91fe2dd2c",
		"id": "6611b7ccbc7bdf3165d72959246d8ea56edb82a4",
		"date": "2012-04-21 01:50:16",
		"author": "Samuel Williams",
		"time": 169,
		"parents": [
			["a7093be10aee7c239fb41b26965104936ef3628d", 168, 0]
		],
		"login": "sammyt"
	}, {
		"message": "Merge pull request #23 from sammyt/master",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c5479757c674e669b66621e9bba652398cf79fdf",
		"date": "2012-04-21 16:31:52",
		"author": "James Burke",
		"time": 170,
		"parents": [
			["a7093be10aee7c239fb41b26965104936ef3628d", 168, 0],
			["6611b7ccbc7bdf3165d72959246d8ea56edb82a4", 169, 1]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update for #23, add plus to version number to indicate it is past last version tag.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "23dc5f932bebf439fddf79868ebbc0410b6f28f0",
		"date": "2012-04-21 16:37:47",
		"author": "jrburke",
		"time": 171,
		"parents": [
			["c5479757c674e669b66621e9bba652398cf79fdf", 170, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update search url for github since v2 urls are going away.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a258269a9921d6678b3725ef456117df3a0ccba1",
		"date": "2012-04-24 15:41:30",
		"author": "jrburke",
		"time": 172,
		"parents": [
			["23dc5f932bebf439fddf79868ebbc0410b6f28f0", 171, 0]
		],
		"login": "jrburke"
	}, {
		"message": "update q to 0.8.4, requirejs 1.0.8",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "860c6cc5b4e8415d849c22e93e6d46c6174f93b2",
		"date": "2012-04-30 11:09:49",
		"author": "jrburke",
		"time": 173,
		"parents": [
			["a258269a9921d6678b3725ef456117df3a0ccba1", 172, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #24, allow directories for project name.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "43cda6a2f1e1fac5c2eaaa94c3ccc82947d18c27",
		"date": "2012-04-30 16:20:58",
		"author": "jrburke",
		"time": 174,
		"parents": [
			["860c6cc5b4e8415d849c22e93e6d46c6174f93b2", 173, 0]
		],
		"login": "jrburke"
	}, {
		"message": "update snapshot, use script to stamp snapshot with the time.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7a7b34628a7a03d34d9501ba6000738a3d2d7931",
		"date": "2012-04-30 16:29:13",
		"author": "jrburke",
		"time": 175,
		"parents": [
			["43cda6a2f1e1fac5c2eaaa94c3ccc82947d18c27", 174, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Working out how to get github authorization to do repo work.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d8b642b7c1f6030a258f0caa5f2720b3bb2df5b3",
		"date": "2012-04-30 22:31:35",
		"author": "jrburke",
		"time": 176,
		"parents": [
			["7a7b34628a7a03d34d9501ba6000738a3d2d7931", 175, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Introduce v.promptHidden() and get githubauth command fully working.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c692debdd944cdfe037454cdd210fc18686800e5",
		"date": "2012-05-01 12:38:08",
		"author": "jrburke",
		"time": 177,
		"parents": [
			["d8b642b7c1f6030a258f0caa5f2720b3bb2df5b3", 176, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Move githubauth from a command to a utility under volo/github/auth.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5d397ddd0b6c4a8fbdcd7bb8139d17373604b787",
		"date": "2012-05-01 16:02:04",
		"author": "jrburke",
		"time": 178,
		"parents": [
			["c692debdd944cdfe037454cdd210fc18686800e5", 177, 1]
		],
		"login": "jrburke"
	}, {
		"message": "add v.withDir and fixed some bugs around github auth data structure.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "84b44a4ef22401766f1b69d4333c80f747d8efa0",
		"date": "2012-05-01 18:20:37",
		"author": "jrburke",
		"time": 179,
		"parents": [
			["5d397ddd0b6c4a8fbdcd7bb8139d17373604b787", 178, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Fix miscellaneous bugs around the github auth and new v. commands.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e51b926f32aa3a6068735ec2b0ca3166618d70bc",
		"date": "2012-05-01 23:43:01",
		"author": "jrburke",
		"time": 180,
		"parents": [
			["84b44a4ef22401766f1b69d4333c80f747d8efa0", 179, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Deal with people who specify a main of \".\" in their package.json.",
		"space": 2,
		"gravatar": "8562f5f1cee7f917fea0110316004add",
		"id": "b123318d367e96ea93a4edc3e8e10326a01c4b58",
		"date": "2012-05-02 00:55:49",
		"author": "Andrew Sutherland",
		"time": 181,
		"parents": [
			["7a7b34628a7a03d34d9501ba6000738a3d2d7931", 175, 0]
		],
		"login": "asutherland"
	}, {
		"message": "Convert v.spawnSequence into a more generic v.sequence that allows non-spawned actions.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8171db1f9b3e21c79a704cf32bcaab2e18fb70d6",
		"date": "2012-05-02 20:35:49",
		"author": "jrburke",
		"time": 182,
		"parents": [
			["e51b926f32aa3a6068735ec2b0ca3166618d70bc", 180, 1]
		],
		"login": "jrburke"
	}, {
		"message": "allow bypassing the use of the default dirRegExpExclude used by copyDir. That code needs docs though.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a7574fbd1a4d499abcfefa088af4471f8f45668e",
		"date": "2012-05-03 10:52:05",
		"author": "jrburke",
		"time": 183,
		"parents": [
			["8171db1f9b3e21c79a704cf32bcaab2e18fb70d6", 182, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Merge pull request #28 from asutherland/master",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e6281b118387b1fe52aadd9290492832a56b7f92",
		"date": "2012-05-03 12:14:02",
		"author": "James Burke",
		"time": 184,
		"parents": [
			["7a7b34628a7a03d34d9501ba6000738a3d2d7931", 175, 0],
			["b123318d367e96ea93a4edc3e8e10326a01c4b58", 181, 2]
		],
		"login": "jrburke"
	}, {
		"message": "Pass back http response object on errors.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "0cecbacb114e936f18df6a570fbc77e41c4b7bdd",
		"date": "2012-05-03 16:51:07",
		"author": "jrburke",
		"time": 185,
		"parents": [
			["a7574fbd1a4d499abcfefa088af4471f8f45668e", 183, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Merge branch 'oauth'",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7e396d13d5d5a617ff06e767b83ace84199ec1dd",
		"date": "2012-05-03 17:26:04",
		"author": "jrburke",
		"time": 186,
		"parents": [
			["e6281b118387b1fe52aadd9290492832a56b7f92", 184, 0],
			["0cecbacb114e936f18df6a570fbc77e41c4b7bdd", 185, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Small style cleanup for #28",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b5921f30290e2c619205d55793048d1ebb61bede",
		"date": "2012-05-03 17:27:18",
		"author": "jrburke",
		"time": 187,
		"parents": [
			["7e396d13d5d5a617ff06e767b83ace84199ec1dd", 186, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fix #31, allow two dashes for flags.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "48e257e83ec0953eb1c120b55fb8ad5efd1a8b40",
		"date": "2012-05-03 18:10:25",
		"author": "jrburke",
		"time": 188,
		"parents": [
			["b5921f30290e2c619205d55793048d1ebb61bede", 187, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Add explicit overrides for commonjs detection for libraries that do not handle node/browser/amd well.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "05ec107341e51ff2f79d49d0b8b07e8c487d3873",
		"date": "2012-05-03 18:11:10",
		"author": "jrburke",
		"time": 189,
		"parents": [
			["48e257e83ec0953eb1c120b55fb8ad5efd1a8b40", 188, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Prep for 0.1.2 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "42cf09645db35f5e21bc77c1e09820cc91adabde",
		"date": "2012-05-03 18:14:19",
		"author": "jrburke",
		"time": 190,
		"parents": [
			["05ec107341e51ff2f79d49d0b8b07e8c487d3873", 189, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #29, allow a volo.baseUrl that does not force an AMD path.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "958a8e8377227b4f9a7c6e5de8b1c953e9c6f0a4",
		"date": "2012-05-07 14:21:18",
		"author": "jrburke",
		"time": 191,
		"parents": [
			["42cf09645db35f5e21bc77c1e09820cc91adabde", 190, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update for #29",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "bc74c1c151c95d9e40d0034812b0c54976b6d90c",
		"date": "2012-05-07 14:23:21",
		"author": "jrburke",
		"time": 192,
		"parents": [
			["958a8e8377227b4f9a7c6e5de8b1c953e9c6f0a4", 191, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Rev version for a quick minirelease",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "0e85b4d4fd92c9a85ce939d312fe6545c2e6ae16",
		"date": "2012-05-07 14:42:38",
		"author": "jrburke",
		"time": 193,
		"parents": [
			["bc74c1c151c95d9e40d0034812b0c54976b6d90c", 192, 0]
		],
		"login": "jrburke"
	}, {
		"message": "dist update for 0.1.3 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "3b2e6ed33869135203c05a59ca03a2451a510d09",
		"date": "2012-05-07 14:46:43",
		"author": "jrburke",
		"time": 194,
		"parents": [
			["0e85b4d4fd92c9a85ce939d312fe6545c2e6ae16", 193, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Do not blow up on a parse error for detecting dependencies, just keep going.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c30501e4dd65b5253d783982991bc92348230035",
		"date": "2012-05-08 11:25:27",
		"author": "jrburke",
		"time": 195,
		"parents": [
			["3b2e6ed33869135203c05a59ca03a2451a510d09", 194, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Relates to #30, read volojs/repos for package.json fallbacks.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b58040f8c0b2042e7c4a9de48684da4691233ff8",
		"date": "2012-05-08 12:31:42",
		"author": "jrburke",
		"time": 196,
		"parents": [
			["c30501e4dd65b5253d783982991bc92348230035", 195, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "48c7abeb3307fc222b562b5dc7653771a4341614",
		"date": "2012-05-08 12:32:45",
		"author": "jrburke",
		"time": 197,
		"parents": [
			["b58040f8c0b2042e7c4a9de48684da4691233ff8", 196, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #30, rely on volojs/repos to list common dependencies for libs, instead of having a local overrides, make sure package.json main file exists before trying to access it.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ec04a7ad7bd81a37c219f2e30ad4a86858654189",
		"date": "2012-05-08 16:09:27",
		"author": "jrburke",
		"time": 198,
		"parents": [
			["48c7abeb3307fc222b562b5dc7653771a4341614", 197, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Throw a useful error if package.json is malformed.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7cf34be8e768b453bb79a49c1712e80cc0e0bc17",
		"date": "2012-05-08 16:21:25",
		"author": "jrburke",
		"time": 199,
		"parents": [
			["ec04a7ad7bd81a37c219f2e30ad4a86858654189", 198, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Give better errors when the error is parsing a package.json file.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e56e9c17170b4782fe2b9195d98fb7521e2d9148",
		"date": "2012-05-08 16:38:10",
		"author": "jrburke",
		"time": 200,
		"parents": [
			["7cf34be8e768b453bb79a49c1712e80cc0e0bc17", 199, 0]
		],
		"login": "jrburke"
	}, {
		"message": "BOM with JSON.parse == bad.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "fde51b924b68e86c2613b19dc663eabb51662af2",
		"date": "2012-05-08 17:43:36",
		"author": "jrburke",
		"time": 201,
		"parents": [
			["e56e9c17170b4782fe2b9195d98fb7521e2d9148", 200, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Remove .js from any directory that is installed, so it plays better with AMD loading scenarios.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d5ba1fd722f20c76357303751714fee34343eb51",
		"date": "2012-05-09 10:21:44",
		"author": "jrburke",
		"time": 202,
		"parents": [
			["fde51b924b68e86c2613b19dc663eabb51662af2", 201, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Do not make an AMD adapter module if the 'main' property's value does not point to a valid file.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f25c9dec44c26aaf7bdd7a2cdae918eef2eae5c7",
		"date": "2012-05-09 11:04:42",
		"author": "jrburke",
		"time": 203,
		"parents": [
			["d5ba1fd722f20c76357303751714fee34343eb51", 202, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Switch AMD autowrap to get the export inside the inner function",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5da38952b27a21372f573f88d1da3b8d8cbc452d",
		"date": "2012-05-09 11:29:59",
		"author": "jrburke",
		"time": 204,
		"parents": [
			["f25c9dec44c26aaf7bdd7a2cdae918eef2eae5c7", 203, 0]
		],
		"login": "jrburke"
	}, {
		"message": "rev version/snapshot for 0.1.4 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d25d86a8d7d83077451f8ce858f8586a98ee47df",
		"date": "2012-05-09 14:27:33",
		"author": "jrburke",
		"time": 205,
		"parents": [
			["5da38952b27a21372f573f88d1da3b8d8cbc452d", 204, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Support using #path/to/dir to just pull out a directory from a zip file on github.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ed28dc8769c64b01ca91c74d35142188e58ed7bf",
		"date": "2012-05-10 00:20:17",
		"author": "jrburke",
		"time": 206,
		"parents": [
			["d25d86a8d7d83077451f8ce858f8586a98ee47df", 205, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Rev version for release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c4618973f50511a701352a982c0d75724d587dc5",
		"date": "2012-05-10 15:11:45",
		"author": "jrburke",
		"time": 207,
		"parents": [
			["ed28dc8769c64b01ca91c74d35142188e58ed7bf", 206, 0]
		],
		"login": "jrburke"
	}, {
		"message": "snapshot update for 0.1.5 release",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "3d62138bf2b23b491fe4467dd3d91bba84490d80",
		"date": "2012-05-10 15:12:32",
		"author": "jrburke",
		"time": 208,
		"parents": [
			["c4618973f50511a701352a982c0d75724d587dc5", 207, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixed windows path error in mkdirs",
		"space": 2,
		"gravatar": "94c60178f33c213676e3b7d76701036c",
		"id": "db71caedf6461831612b13ba06c9a5f7310f6a4a",
		"date": "2012-05-11 10:34:01",
		"author": "Marcus Stade",
		"time": 209,
		"parents": [
			["3d62138bf2b23b491fe4467dd3d91bba84490d80", 208, 0]
		],
		"login": "mstade"
	}, {
		"message": "Merge pull request #33 from mstade/master",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "14ea6eabe9e3a10e0a2cf253f1f1d779f50aecbf",
		"date": "2012-05-11 11:26:38",
		"author": "James Burke",
		"time": 210,
		"parents": [
			["3d62138bf2b23b491fe4467dd3d91bba84490d80", 208, 0],
			["db71caedf6461831612b13ba06c9a5f7310f6a4a", 209, 2]
		],
		"login": "jrburke"
	}, {
		"message": "Playing around with depends support, but needs some infrastructure changes. Just committing to not lose work while I shift focus. This code does not work yet, just a half implementation.",
		"space": 3,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "6be032431dcd29acc039b1090f4684c7e6b2f1d6",
		"date": "2012-05-15 14:43:40",
		"author": "jrburke",
		"time": 211,
		"parents": [
			["14ea6eabe9e3a10e0a2cf253f1f1d779f50aecbf", 210, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Trying out volo as just a plain npm installed module. Not working yet, just shuffling code around.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5f2f55986d9adea87d1848cd6e69273369e8eb02",
		"date": "2012-05-15 15:16:00",
		"author": "jrburke",
		"time": 212,
		"parents": [
			["14ea6eabe9e3a10e0a2cf253f1f1d779f50aecbf", 210, 0]
		],
		"login": "jrburke"
	}, {
		"message": "more broken shuffling",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "fbe633ca760c271e71ee0bd4560c6938542bb64e",
		"date": "2012-05-15 16:23:48",
		"author": "jrburke",
		"time": 213,
		"parents": [
			["5f2f55986d9adea87d1848cd6e69273369e8eb02", 212, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Got search and help to spit out something.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "184848d4c51d5c0c229cbd9f317f93d50f7cc0f2",
		"date": "2012-05-15 17:26:09",
		"author": "jrburke",
		"time": 214,
		"parents": [
			["fbe633ca760c271e71ee0bd4560c6938542bb64e", 213, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Working on getting tests to pass again.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f0e457f799c4ec137853a83bca6fa69962288d5e",
		"date": "2012-05-15 19:36:46",
		"author": "jrburke",
		"time": 215,
		"parents": [
			["184848d4c51d5c0c229cbd9f317f93d50f7cc0f2", 214, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Get rest of the tests to pass.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "df11581595477aa0c9cf7e4dcd4ff9d09b000d29",
		"date": "2012-05-15 22:32:02",
		"author": "jrburke",
		"time": 216,
		"parents": [
			["f0e457f799c4ec137853a83bca6fa69962288d5e", 215, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Remove cruft from node_modules",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b619a75ccb0838fc83d842645b507cb0fd3b098b",
		"date": "2012-05-16 12:03:29",
		"author": "jrburke",
		"time": 217,
		"parents": [
			["df11581595477aa0c9cf7e4dcd4ff9d09b000d29", 216, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Experimenting with a volofile requiring a global volo module. Does not work.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f3c6e895be8b080edae78ab6a20ef35f74c7f7b7",
		"date": "2012-05-16 17:01:14",
		"author": "jrburke",
		"time": 218,
		"parents": [
			["b619a75ccb0838fc83d842645b507cb0fd3b098b", 217, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #34, v.promptHidden did not work after the first time. Also revved version to indicate it is past 0.1.5",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f738f0950cc7ffca68dc358da257e866340d8163",
		"date": "2012-05-16 23:16:35",
		"author": "jrburke",
		"time": 219,
		"parents": [
			["14ea6eabe9e3a10e0a2cf253f1f1d779f50aecbf", 210, 0]
		],
		"login": "jrburke"
	}, {
		"message": "jslint fix and snapshot update.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "58abd969fcfbc78977f632ecc7f87a453a26520f",
		"date": "2012-05-16 23:18:06",
		"author": "jrburke",
		"time": 220,
		"parents": [
			["f738f0950cc7ffca68dc358da257e866340d8163", 219, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Use a file in the homedir for oauth token storage instead of near volo, since that may be a sudo location.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7769a53669686c553b6effa39ebbf597880f5aa0",
		"date": "2012-05-16 23:31:50",
		"author": "jrburke",
		"time": 221,
		"parents": [
			["58abd969fcfbc78977f632ecc7f87a453a26520f", 220, 1]
		],
		"login": "jrburke"
	}, {
		"message": "rev version for 0.1.6 release.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "6b6e33bca5f200d871806b9c68d8db00bb641ca6",
		"date": "2012-05-16 23:33:14",
		"author": "jrburke",
		"time": 222,
		"parents": [
			["7769a53669686c553b6effa39ebbf597880f5aa0", 221, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Merge from master, picking up promptHidden fix and config's use of .voloconfig now in homeDir",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "99f1f94d07813ed8fc76ddd212b6786014bbb7ac",
		"date": "2012-05-17 13:29:23",
		"author": "jrburke",
		"time": 223,
		"parents": [
			["f3c6e895be8b080edae78ab6a20ef35f74c7f7b7", 218, 0],
			["6b6e33bca5f200d871806b9c68d8db00bb641ca6", 222, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Allow volofiles to use volo's require to get volo internals, also upgrade q to 0.8.5. Got basic test with v.require to pass.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e6dc0719517f2c4169fdda9daf430f3161bc7441",
		"date": "2012-05-17 14:54:19",
		"author": "jrburke",
		"time": 224,
		"parents": [
			["99f1f94d07813ed8fc76ddd212b6786014bbb7ac", 223, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update volo add documentation to reference volo.baseUrl rather than amd.baseUrl.",
		"space": 7,
		"gravatar": "1b431ffe7ee742457cc5e78000e56e0b",
		"id": "4f6373bdc5eea4c45791d8e5cccb8ae963759f36",
		"date": "2012-05-17 15:20:33",
		"author": "Dan Mosedale",
		"time": 225,
		"parents": [
			["6b6e33bca5f200d871806b9c68d8db00bb641ca6", 222, 1]
		],
		"login": "dmose"
	}, {
		"message": "legacy 0.1 volofile support. At least the basics.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "07a5e765c32c691d1062a9c6200f9a0c01e502d2",
		"date": "2012-05-17 17:03:20",
		"author": "jrburke",
		"time": 226,
		"parents": [
			["e6dc0719517f2c4169fdda9daf430f3161bc7441", 224, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Use generic name instead of node's module.id which is a file path.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "dea88aeb37a205b847fbfd8939baaf747b3ad4ad",
		"date": "2012-05-17 17:42:26",
		"author": "jrburke",
		"time": 227,
		"parents": [
			["07a5e765c32c691d1062a9c6200f9a0c01e502d2", 226, 0]
		],
		"login": "jrburke"
	}, {
		"message": "initil move of files to separate commands from lib.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "609b2ef8d62e00199aea6530cc938b6f80e7fd2e",
		"date": "2012-05-17 17:48:48",
		"author": "jrburke",
		"time": 228,
		"parents": [
			["dea88aeb37a205b847fbfd8939baaf747b3ad4ad", 227, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fix module IDs with new paths.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "129cd19ec360595b2bf0eea03b74f884c254c932",
		"date": "2012-05-17 22:40:26",
		"author": "jrburke",
		"time": 229,
		"parents": [
			["609b2ef8d62e00199aea6530cc938b6f80e7fd2e", 228, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Make sure directory does not exist before making it.",
		"space": 6,
		"gravatar": "bf7a9ae042ac205102f2c97de9194d5a",
		"id": "9e0d941096d4e98b813fe35a769826f5bd0b3df5",
		"date": "2012-05-21 15:23:25",
		"author": "Karl Guillotte",
		"time": 230,
		"parents": [
			["6b6e33bca5f200d871806b9c68d8db00bb641ca6", 222, 1]
		],
		"login": "karlguillotte"
	}, {
		"message": "allow just using a string for a volofile command or an array of strings, and use shell-quote to expand that to an array usable by v.spawn. Also allow running a local node command via an n prefix on the command.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d988c0d6a31411d5eba318db884d3e6ceef9fac4",
		"date": "2012-06-05 23:14:39",
		"author": "jrburke",
		"time": 231,
		"parents": [
			["129cd19ec360595b2bf0eea03b74f884c254c932", 229, 0]
		],
		"login": "jrburke"
	}, {
		"message": "depends works, along with shell strings and array of strings for commands. special v. prefix triggers venv command, and n. prefix looks for a local node executable.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f80be7a201295e7766211c1844ed2688fbba7da8",
		"date": "2012-06-06 10:52:46",
		"author": "jrburke",
		"time": 232,
		"parents": [
			["d988c0d6a31411d5eba318db884d3e6ceef9fac4", 231, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Small fixes, prefer volo.baseDir, make sure v.spawn has valid args array, fix unit test uppercase script to take file input as an argument.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "e820f16899f9696e91a0f2d1b0bb4c3d0539af71",
		"date": "2012-06-06 11:32:44",
		"author": "jrburke",
		"time": 233,
		"parents": [
			["f80be7a201295e7766211c1844ed2688fbba7da8", 232, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update some docs to reflect new code structure.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "cfd1a9e8a47cfea84f8ca73db5084651804d1f43",
		"date": "2012-06-06 11:42:46",
		"author": "jrburke",
		"time": 234,
		"parents": [
			["e820f16899f9696e91a0f2d1b0bb4c3d0539af71", 233, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Work out some kinks with recursive add, always stamp a package.json so that the archive name is remembered. Added test.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "836d66b4d031bcfc105c9363813e0ef294c6c391",
		"date": "2012-06-06 16:05:27",
		"author": "jrburke",
		"time": 235,
		"parents": [
			["cfd1a9e8a47cfea84f8ca73db5084651804d1f43", 234, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Testing out volo add that does all the adding for a package.json dependencies set, updated some docs on how to develop.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "df0b322072dbeca47b2cb82203cf25d18cb9c574",
		"date": "2012-06-06 17:04:35",
		"author": "jrburke",
		"time": 236,
		"parents": [
			["836d66b4d031bcfc105c9363813e0ef294c6c391", 235, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #52",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b92a230161f118c0577edb690f48ef3baba52ae2",
		"date": "2012-06-06 18:51:13",
		"author": "jrburke",
		"time": 237,
		"parents": [
			["df0b322072dbeca47b2cb82203cf25d18cb9c574", 236, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #46, allow -h, and also shows volofile command help.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "4e5f0bf9557ea331ad9c85477c6887607d894e73",
		"date": "2012-06-06 22:39:02",
		"author": "jrburke",
		"time": 238,
		"parents": [
			["b92a230161f118c0577edb690f48ef3baba52ae2", 237, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Small help format tweak, rev to 0.2.0",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d04727f40a1acc1957aea183c2f8fccc8142c0ad",
		"date": "2012-06-06 23:49:07",
		"author": "jrburke",
		"time": 239,
		"parents": [
			["4e5f0bf9557ea331ad9c85477c6887607d894e73", 238, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #44, make sure all {version} mentions are replaced.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "0d04453b6633ebc3c5bfc7870bd683e4844f9784",
		"date": "2012-06-07 12:22:05",
		"author": "jrburke",
		"time": 240,
		"parents": [
			["d04727f40a1acc1957aea183c2f8fccc8142c0ad", 239, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #57, be sure to properly use any package.json fetched from github instead of assuming a local package.json read.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "2691ecc6489fba97b9302c5e56af45f9cca2436f",
		"date": "2012-06-20 14:01:01",
		"author": "jrburke",
		"time": 241,
		"parents": [
			["0d04453b6633ebc3c5bfc7870bd683e4844f9784", 240, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Rev version to show past 0.2.0",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8ac01fbd23028947b03169c60170412cbcef800b",
		"date": "2012-06-20 14:01:46",
		"author": "jrburke",
		"time": 242,
		"parents": [
			["2691ecc6489fba97b9302c5e56af45f9cca2436f", 241, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #45, make sure directory does not exist before creating it in unzip.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7e0c255dc9b8024c6837837594aa83faa31b6a73",
		"date": "2012-06-20 14:04:26",
		"author": "jrburke",
		"time": 243,
		"parents": [
			["8ac01fbd23028947b03169c60170412cbcef800b", 242, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #37 and Fixes #41, be aware of default branches that are not master, and use volo.url name for local name instead of repo name.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7fc747499291ae2d56911a6bef845f5a33fc6361",
		"date": "2012-06-20 15:52:17",
		"author": "jrburke",
		"time": 244,
		"parents": [
			["7e0c255dc9b8024c6837837594aa83faa31b6a73", 243, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #55, fix display of final amd name.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "de7bbb8fc01f77e1db4f55e9ec841d13e558f26b",
		"date": "2012-06-20 16:40:56",
		"author": "jrburke",
		"time": 245,
		"parents": [
			["7fc747499291ae2d56911a6bef845f5a33fc6361", 244, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #56, use try master package.json if tag does not have one, before going to shim repo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "bdc95700fd6b866a9b70cb7c8ce42ff03ea4bfc3",
		"date": "2012-06-20 17:08:31",
		"author": "jrburke",
		"time": 246,
		"parents": [
			["de7bbb8fc01f77e1db4f55e9ec841d13e558f26b", 245, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Remove config that is no longer needed, rejuvenate is gone",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "8c91c2b33a04ece32f9d6e559b5413d0ba391b1c",
		"date": "2012-06-20 17:36:52",
		"author": "jrburke",
		"time": 247,
		"parents": [
			["bdc95700fd6b866a9b70cb7c8ce42ff03ea4bfc3", 246, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #59, use content type detection so no longer need volo.archive, just volo.url is enough.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "96ca49844d23cc8d50b2a92312f658588285a001",
		"date": "2012-06-20 18:28:46",
		"author": "jrburke",
		"time": 248,
		"parents": [
			["8c91c2b33a04ece32f9d6e559b5413d0ba391b1c", 247, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #58, avoids amd prompts for a directory if the main module is already in AMD.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "cd710797fbd3b92ac6ec1872cd27088483aa8c1e",
		"date": "2012-06-20 21:16:49",
		"author": "jrburke",
		"time": 249,
		"parents": [
			["96ca49844d23cc8d50b2a92312f658588285a001", 248, 0]
		],
		"login": "jrburke"
	}, {
		"message": "rev to version 0.2.1",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "42a23e3bc8a6f52bc45aae53bf0b7bfe9ee8ece9",
		"date": "2012-06-20 22:50:16",
		"author": "jrburke",
		"time": 250,
		"parents": [
			["cd710797fbd3b92ac6ec1872cd27088483aa8c1e", 249, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #60 volo add url",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "4e87a05779ac364a5be85ca25d5796cd1c637c22",
		"date": "2012-06-22 11:23:53",
		"author": "jrburke",
		"time": 251,
		"parents": [
			["42a23e3bc8a6f52bc45aae53bf0b7bfe9ee8ece9", 250, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fix URLs in README.md",
		"space": 1,
		"gravatar": "686ef30d99b4c37b2326c568ebfadab1",
		"id": "e595c37a42a723dca2b6828204e39c80650243c9",
		"date": "2012-06-24 07:30:02",
		"author": "theotheo",
		"time": 252,
		"parents": [
			["4e87a05779ac364a5be85ca25d5796cd1c637c22", 251, 0]
		],
		"login": "theotheo"
	}, {
		"message": "Merge pull request #62 from theotheo/master",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "524bf18770eaed1898fa34f95a15c0a87516dd86",
		"date": "2012-06-24 22:21:48",
		"author": "James Burke",
		"time": 253,
		"parents": [
			["4e87a05779ac364a5be85ca25d5796cd1c637c22", 251, 0],
			["e595c37a42a723dca2b6828204e39c80650243c9", 252, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #67, for single file volo.url downloads, do not include the version in the name.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b37b5dcf42d45666e0f1ad417a364ead606e9d56",
		"date": "2012-07-06 22:11:20",
		"author": "jrburke",
		"time": 254,
		"parents": [
			["4e87a05779ac364a5be85ca25d5796cd1c637c22", 251, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Merge branch 'master' of github.com:volojs/volo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ab5f09d99e0f440e704fb662bf2ea6fad2662523",
		"date": "2012-07-06 22:11:36",
		"author": "jrburke",
		"time": 255,
		"parents": [
			["b37b5dcf42d45666e0f1ad417a364ead606e9d56", 254, 0],
			["524bf18770eaed1898fa34f95a15c0a87516dd86", 253, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #66, favor search results that exact match search term.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "59b07b25d2b8f1c637040ca004e52641a0328811",
		"date": "2012-07-06 22:21:10",
		"author": "jrburke",
		"time": 256,
		"parents": [
			["ab5f09d99e0f440e704fb662bf2ea6fad2662523", 255, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #70, only add final release tags.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f34451207bf43679014637c7fbbf1ef355d30569",
		"date": "2012-07-06 22:33:53",
		"author": "jrburke",
		"time": 257,
		"parents": [
			["59b07b25d2b8f1c637040ca004e52641a0328811", 256, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #69, support npm style of metadata comment.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "05fff05c6a3eac1bf9ee16c26a8c378b22fe9fb1",
		"date": "2012-07-06 22:43:24",
		"author": "jrburke",
		"time": 258,
		"parents": [
			["f34451207bf43679014637c7fbbf1ef355d30569", 257, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #68, run npm in create if the project has a package.json with dependencies and no existing node_modules folder.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "cfe219c45a9f4dbe33e50d1727d6d88ae7347a74",
		"date": "2012-07-06 23:40:45",
		"author": "jrburke",
		"time": 259,
		"parents": [
			["05fff05c6a3eac1bf9ee16c26a8c378b22fe9fb1", 258, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #63, give better error for runtime errors in volofiles.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "377887606879c94761a3abee2954763543c8ddd4",
		"date": "2012-07-06 23:53:24",
		"author": "jrburke",
		"time": 260,
		"parents": [
			["cfe219c45a9f4dbe33e50d1727d6d88ae7347a74", 259, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Rev version for 0.2.2 release.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "2c6d0058ed0dca27bde850287f5eeae4f5fb4afa",
		"date": "2012-07-06 23:58:41",
		"author": "jrburke",
		"time": 261,
		"parents": [
			["377887606879c94761a3abee2954763543c8ddd4", 260, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Remove logic that tries to guess if a single file or all files should be installed, which seems \"too smart\", and fails to install some libs, like when.js",
		"space": 5,
		"gravatar": "065fd335ab9eb2bec2dcf8015188c4c5",
		"id": "d044c553c4c07e56b8f2635c39e0d2a0cf679be7",
		"date": "2012-08-06 09:37:04",
		"author": "Brian Cavalier",
		"time": 262,
		"parents": [
			["2c6d0058ed0dca27bde850287f5eeae4f5fb4afa", 261, 0]
		],
		"login": "briancavalier"
	}, {
		"message": "Fixes #76, try to call out volo add processing package.json by itself.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "37e88172ec2daab7c287d8bfba88adaced66320f",
		"date": "2012-08-13 14:23:05",
		"author": "jrburke",
		"time": 263,
		"parents": [
			["2c6d0058ed0dca27bde850287f5eeae4f5fb4afa", 261, 0]
		],
		"login": "jrburke"
	}, {
		"message": "readme tweaks, based on discussions with @jlongster",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "9409d784440ea34b2a044d2e1995a8ee5fdc67d9",
		"date": "2012-08-13 15:59:54",
		"author": "jrburke",
		"time": 264,
		"parents": [
			["37e88172ec2daab7c287d8bfba88adaced66320f", 263, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Add details on when sudo may be needed.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "dd08ea3d656c40fea2fa5bc3189488fb3e5701c7",
		"date": "2012-08-20 14:18:40",
		"author": "James Burke",
		"time": 265,
		"parents": [
			["9409d784440ea34b2a044d2e1995a8ee5fdc67d9", 264, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Tweak voloLib path to resolve against test directory instead of cwd",
		"space": 2,
		"gravatar": "ed265adf145a12d2e5f09b2a761f232f",
		"id": "9214169362e7a7bb43ab701d816faa55e9fd8e33",
		"date": "2012-08-23 20:17:14",
		"author": "Damon Oehlman",
		"time": 266,
		"parents": [
			["dd08ea3d656c40fea2fa5bc3189488fb3e5701c7", 265, 1]
		],
		"login": "DamonOehlman"
	}, {
		"message": "Merge pull request #84 from DamonOehlman/master",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "cc5a6ab7fa34aceb669cba218b0d961df5925a0d",
		"date": "2012-08-23 21:42:05",
		"author": "James Burke",
		"time": 267,
		"parents": [
			["dd08ea3d656c40fea2fa5bc3189488fb3e5701c7", 265, 1],
			["9214169362e7a7bb43ab701d816faa55e9fd8e33", 266, 2]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #71, setRawMode not using deprecated tty call for node 0.8+",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "40bbc49d13ca6d8dd10c144ed1c6155f0b01eadb",
		"date": "2012-08-24 11:32:17",
		"author": "jrburke",
		"time": 268,
		"parents": [
			["9409d784440ea34b2a044d2e1995a8ee5fdc67d9", 264, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Merge branch 'master' of github.com:volojs/volo",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "35ed9751e8b31ce294fd733abb83139d5b32bdfa",
		"date": "2012-08-24 11:33:03",
		"author": "jrburke",
		"time": 269,
		"parents": [
			["40bbc49d13ca6d8dd10c144ed1c6155f0b01eadb", 268, 0],
			["cc5a6ab7fa34aceb669cba218b0d961df5925a0d", 267, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #87, allow local zip files when calling create",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "6238d46f29460aed3b9deed239f4ce8443d8bce0",
		"date": "2012-08-24 19:48:33",
		"author": "jrburke",
		"time": 270,
		"parents": [
			["35ed9751e8b31ce294fd733abb83139d5b32bdfa", 269, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #88, make sure skipping of version control directory copying is stricter.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "fee5002c14f8214bb921d66ef2f9b75c50be7e87",
		"date": "2012-08-24 20:02:58",
		"author": "jrburke",
		"time": 271,
		"parents": [
			["6238d46f29460aed3b9deed239f4ce8443d8bce0", 270, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Improving volofile discovery",
		"space": 9,
		"gravatar": "ed265adf145a12d2e5f09b2a761f232f",
		"id": "d40f48e977c4ae2cc87c3fd1427c15c5aea6a99a",
		"date": "2012-08-25 02:43:44",
		"author": "Damon Oehlman",
		"time": 272,
		"parents": [
			["9214169362e7a7bb43ab701d816faa55e9fd8e33", 266, 2]
		],
		"login": "DamonOehlman"
	}, {
		"message": "Exploring #74, not done yet.",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7307c7012f22550c096e507219d1d15999c990cc",
		"date": "2012-08-25 22:34:40",
		"author": "jrburke",
		"time": 273,
		"parents": [
			["fee5002c14f8214bb921d66ef2f9b75c50be7e87", 271, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #74, do not strip off too much from dot-separated names.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "4f8a1e4898203d9b81a85513c31082fc0e3b9f1f",
		"date": "2012-08-25 22:53:10",
		"author": "jrburke",
		"time": 274,
		"parents": [
			["fee5002c14f8214bb921d66ef2f9b75c50be7e87", 271, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #79, allow semver ranges in the version tag part of archive names.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c1718853826b172f4f7b53e100609aa91612911c",
		"date": "2012-08-26 16:32:26",
		"author": "jrburke",
		"time": 275,
		"parents": [
			["4f8a1e4898203d9b81a85513c31082fc0e3b9f1f", 274, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Relates to #79, allow search/semver archive names.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a68f760e5ee48dadae52db84b2c72a5a8805e5ae",
		"date": "2012-08-27 15:32:37",
		"author": "jrburke",
		"time": 276,
		"parents": [
			["c1718853826b172f4f7b53e100609aa91612911c", 275, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Merge branch 'bug74'",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "d763e94b93c673e4473ae654192c70c2cfb87548",
		"date": "2012-08-27 15:42:53",
		"author": "jrburke",
		"time": 277,
		"parents": [
			["a68f760e5ee48dadae52db84b2c72a5a8805e5ae", 276, 0],
			["7307c7012f22550c096e507219d1d15999c990cc", 273, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #86, allow directories for fragment IDs.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "69a7b20ba1c66a73951c30e6460cfe39cc5cde56",
		"date": "2012-08-27 15:49:35",
		"author": "jrburke",
		"time": 278,
		"parents": [
			["d763e94b93c673e4473ae654192c70c2cfb87548", 277, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #83, run volo add as part of create if package.json for project has volo.dependencies",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "b2dca40667fd7a5074cc97bd54384a13447c505b",
		"date": "2012-08-27 16:32:48",
		"author": "jrburke",
		"time": 279,
		"parents": [
			["69a7b20ba1c66a73951c30e6460cfe39cc5cde56", 278, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #78, inform user of exact conflict.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "5511175fce9109af9ad0ea6107efb49da5a0c991",
		"date": "2012-08-27 18:08:36",
		"author": "jrburke",
		"time": 280,
		"parents": [
			["b2dca40667fd7a5074cc97bd54384a13447c505b", 279, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Update README to have dev/debug/test info, fixes #51",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "53da4635b71026232d6a273d90ac5363db31f33e",
		"date": "2012-08-27 19:35:52",
		"author": "jrburke",
		"time": 281,
		"parents": [
			["5511175fce9109af9ad0ea6107efb49da5a0c991", 280, 0]
		],
		"login": "jrburke"
	}, {
		"message": "readme typos",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "c4cffdd1265beccf0da12baa2dc455c021039e77",
		"date": "2012-08-27 19:37:15",
		"author": "jrburke",
		"time": 282,
		"parents": [
			["53da4635b71026232d6a273d90ac5363db31f33e", 281, 0]
		],
		"login": "jrburke"
	}, {
		"message": "init",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "047ee0767620e8550430fcd50d9a00e386dd65d8",
		"date": "2012-08-29 13:33:36",
		"author": "jrburke",
		"time": 283,
		"parents": [],
		"login": "jrburke"
	}, {
		"message": "remove less file",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "ed776c792d152b83c10e49f6c0a4d8d933065a4a",
		"date": "2012-08-29 13:33:56",
		"author": "jrburke",
		"time": 284,
		"parents": [
			["047ee0767620e8550430fcd50d9a00e386dd65d8", 283, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Add CNAME file",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "95651fcde2623cb1cbf496722f68918772e25fb9",
		"date": "2012-08-29 13:36:22",
		"author": "jrburke",
		"time": 285,
		"parents": [
			["ed776c792d152b83c10e49f6c0a4d8d933065a4a", 284, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Move the dev stuff to the dev page instead of having it in the readme.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a453b45694c18820b7be5935c2954873070200d5",
		"date": "2012-08-29 13:45:25",
		"author": "jrburke",
		"time": 286,
		"parents": [
			["c4cffdd1265beccf0da12baa2dc455c021039e77", 282, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #89, allow using N.N.N even if tags are vN.N.N",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "57cdc72c248c3d6258398e1add8da9042004698a",
		"date": "2012-08-29 14:34:33",
		"author": "jrburke",
		"time": 287,
		"parents": [
			["a453b45694c18820b7be5935c2954873070200d5", 286, 0]
		],
		"login": "jrburke"
	}, {
		"message": "More add examples",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "fc23bc958056c4d9bf05fe14b8186c211de024e2",
		"date": "2012-08-29 14:43:08",
		"author": "jrburke",
		"time": 288,
		"parents": [
			["95651fcde2623cb1cbf496722f68918772e25fb9", 285, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Rev for 0.2.3 release",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "7a2cec3a97017151a0dffb6050f797441145c49f",
		"date": "2012-08-29 14:46:00",
		"author": "jrburke",
		"time": 289,
		"parents": [
			["57cdc72c248c3d6258398e1add8da9042004698a", 287, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Adapt layout to width of window",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "21098dfbfc44cb1ef6f8af08c56909c617bba591",
		"date": "2012-08-29 18:17:09",
		"author": "jrburke",
		"time": 290,
		"parents": [
			["fc23bc958056c4d9bf05fe14b8186c211de024e2", 288, 1]
		],
		"login": "jrburke"
	}, {
		"message": "Add latest version to the page",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "57f840b7c3c5aabffb5f5278012fc946e4efe153",
		"date": "2012-08-29 18:44:34",
		"author": "jrburke",
		"time": 291,
		"parents": [
			["21098dfbfc44cb1ef6f8af08c56909c617bba591", 290, 1]
		],
		"login": "jrburke"
	}, {
		"message": "tweak title",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "86d5f7babb4b20bb891bf12745365cde2b6348ad",
		"date": "2012-08-29 18:49:30",
		"author": "jrburke",
		"time": 292,
		"parents": [
			["57f840b7c3c5aabffb5f5278012fc946e4efe153", 291, 1]
		],
		"login": "jrburke"
	}, {
		"message": "readme update",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "1f8b0e2e6233c97ce68ab7459f07fc2ce6091faa",
		"date": "2012-08-29 20:04:25",
		"author": "jrburke",
		"time": 293,
		"parents": [
			["7a2cec3a97017151a0dffb6050f797441145c49f", 289, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #90, allow single file JS installs into a directory inside baseUrl",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "4696c4d9937825e8705702d814bf94978fb50335",
		"date": "2012-08-30 11:24:19",
		"author": "jrburke",
		"time": 294,
		"parents": [
			["1f8b0e2e6233c97ce68ab7459f07fc2ce6091faa", 293, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Refs: #90, ensure tmp directory exists before trying to write to it - using the mkdirp npm module to get recursive mkdirs on missing directories (like mkdir -p)",
		"space": 10,
		"gravatar": "bd7f5a604f1dd087822c7548468d3735",
		"id": "dfbbea2e8a72e8762b43840066116747a22bf010",
		"date": "2012-08-31 05:05:07",
		"author": "sfoster",
		"time": 295,
		"parents": [
			["4696c4d9937825e8705702d814bf94978fb50335", 294, 0]
		],
		"login": "sfoster"
	}, {
		"message": "Refs #90, checking in the mkdirp dependency",
		"space": 10,
		"gravatar": "bd7f5a604f1dd087822c7548468d3735",
		"id": "949602d348d3108554ef139da6097640599c2a11",
		"date": "2012-08-31 05:05:47",
		"author": "sfoster",
		"time": 296,
		"parents": [
			["dfbbea2e8a72e8762b43840066116747a22bf010", 295, 10]
		],
		"login": "sfoster"
	}, {
		"message": "Fixes #91, make sure download path exists.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "cb0323f9b672fa34bedb3687033cb3b0bd8f9c0c",
		"date": "2012-08-31 10:01:02",
		"author": "jrburke",
		"time": 297,
		"parents": [
			["4696c4d9937825e8705702d814bf94978fb50335", 294, 0]
		],
		"login": "jrburke"
	}, {
		"message": "merged",
		"space": 9,
		"gravatar": "ed265adf145a12d2e5f09b2a761f232f",
		"id": "5fc21d01caa2832d075a0d5e262db24415320c04",
		"date": "2012-09-06 02:37:55",
		"author": "Damon Oehlman",
		"time": 298,
		"parents": [
			["d40f48e977c4ae2cc87c3fd1427c15c5aea6a99a", 272, 9],
			["cb0323f9b672fa34bedb3687033cb3b0bd8f9c0c", 297, 0]
		],
		"login": "DamonOehlman"
	}, {
		"message": "Volofile location found when in a child directory",
		"space": 9,
		"gravatar": "ed265adf145a12d2e5f09b2a761f232f",
		"id": "f351e2b6665f7eb0e61f1364e5871083afa2f4ed",
		"date": "2012-09-06 03:09:07",
		"author": "Damon Oehlman",
		"time": 299,
		"parents": [
			["5fc21d01caa2832d075a0d5e262db24415320c04", 298, 9]
		],
		"login": "DamonOehlman"
	}, {
		"message": "Updated to minimize cwd changing, rather use the scope initialized in the venv",
		"space": 9,
		"gravatar": "ed265adf145a12d2e5f09b2a761f232f",
		"id": "3daaefe401fcb519723a5a225b60c9e3615f050b",
		"date": "2012-09-06 03:39:08",
		"author": "Damon Oehlman",
		"time": 300,
		"parents": [
			["f351e2b6665f7eb0e61f1364e5871083afa2f4ed", 299, 9]
		],
		"login": "DamonOehlman"
	}, {
		"message": "change semVerRangeRegExp to include 1.x/1.2.x",
		"space": 8,
		"gravatar": "a36481ed49a3cd7fa741448609f3a53d",
		"id": "e80f56931a21fbcf4f0c223c294d9c091f073894",
		"date": "2012-09-09 18:39:27",
		"author": "dshimkoski",
		"time": 301,
		"parents": [
			["cb0323f9b672fa34bedb3687033cb3b0bd8f9c0c", 297, 0]
		],
		"login": "dshimkoski"
	}, {
		"message": "add resolver for registry on file system",
		"space": 8,
		"gravatar": "a36481ed49a3cd7fa741448609f3a53d",
		"id": "95cdde93b5c11c3885b108d2a28fe9431da7eea9",
		"date": "2012-09-10 20:11:01",
		"author": "dshimkoski",
		"time": 302,
		"parents": [
			["e80f56931a21fbcf4f0c223c294d9c091f073894", 301, 8]
		],
		"login": "dshimkoski"
	}, {
		"message": "Remove logic that tries to guess if a single file or all files should be installed, which seems \"too smart\", and fails to install some libs, like when.js",
		"space": 4,
		"gravatar": "065fd335ab9eb2bec2dcf8015188c4c5",
		"id": "78b3a347a64889681c20faf8694e837ca677cf17",
		"date": "2012-09-19 08:38:39",
		"author": "Brian Cavalier",
		"time": 303,
		"parents": [
			["cb0323f9b672fa34bedb3687033cb3b0bd8f9c0c", 297, 0]
		],
		"login": "briancavalier"
	}, {
		"message": "Adding webstorm project dir to gitignore",
		"space": 4,
		"gravatar": "065fd335ab9eb2bec2dcf8015188c4c5",
		"id": "e60012178da46640ae24b0b2cfb5101b27d64da1",
		"date": "2012-09-19 08:39:17",
		"author": "Brian Cavalier",
		"time": 304,
		"parents": [
			["78b3a347a64889681c20faf8694e837ca677cf17", 303, 4]
		],
		"login": "briancavalier"
	}, {
		"message": "Merge branch '511' of github.com:five-eleven/volo into 511",
		"space": 4,
		"gravatar": "065fd335ab9eb2bec2dcf8015188c4c5",
		"id": "2757db4dbb03fd9f1a928ce9b3809ef279b6ed94",
		"date": "2012-09-19 08:39:57",
		"author": "Brian Cavalier",
		"time": 305,
		"parents": [
			["e60012178da46640ae24b0b2cfb5101b27d64da1", 304, 4],
			["d044c553c4c07e56b8f2635c39e0d2a0cf679be7", 262, 5]
		],
		"login": "briancavalier"
	}, {
		"message": "Fixes #98, re-allow branch names in github archive IDs.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "a18827f85236b916a34d0fa8ada4959761d232a2",
		"date": "2012-09-25 10:18:07",
		"author": "jrburke",
		"time": 306,
		"parents": [
			["cb0323f9b672fa34bedb3687033cb3b0bd8f9c0c", 297, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #102, only do a delete if have a directory, and make sure the package.json dependencies exists before trying to use it.",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "0095a62c842b3d5ee6a79b51470f59bf0fcef7fc",
		"date": "2012-10-04 23:02:15",
		"author": "jrburke",
		"time": 307,
		"parents": [
			["a18827f85236b916a34d0fa8ada4959761d232a2", 306, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #94, allow more types of semvers",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "1a369f85c11f798a08fa4b4a5670ad83cdaf043e",
		"date": "2012-10-05 12:28:57",
		"author": "jrburke",
		"time": 308,
		"parents": [
			["0095a62c842b3d5ee6a79b51470f59bf0fcef7fc", 307, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #95, alias an install command to add",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "25037501c16124a1f44f83db1401315520f9b5ea",
		"date": "2012-10-05 12:39:00",
		"author": "jrburke",
		"time": 309,
		"parents": [
			["1a369f85c11f798a08fa4b4a5670ad83cdaf043e", 308, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Fixes #93, start of an info tag",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "1e8ce0db34abf04605963a5a9e2cddbda12cb448",
		"date": "2012-10-05 13:16:12",
		"author": "jrburke",
		"time": 310,
		"parents": [
			["25037501c16124a1f44f83db1401315520f9b5ea", 309, 0]
		],
		"login": "jrburke"
	}, {
		"message": "Rev for 0.2.4",
		"space": 0,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "0ab709b77671bc094b25cf6322cdd3d6a20d7367",
		"date": "2012-10-05 13:32:28",
		"author": "jrburke",
		"time": 311,
		"parents": [
			["1e8ce0db34abf04605963a5a9e2cddbda12cb448", 310, 0]
		],
		"login": "jrburke"
	}, {
		"message": "mention zipball used from github for create",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "6ed22833536086a67af0a05d860a22833b7e09fc",
		"date": "2012-11-15 13:01:26",
		"author": "jrburke",
		"time": 312,
		"parents": [
			["86d5f7babb4b20bb891bf12745365cde2b6348ad", 292, 1]
		],
		"login": "jrburke"
	}, {
		"message": "make it clear zipballs are used",
		"space": 1,
		"gravatar": "00ac28bdce61e7db41be57fb3b7f3525",
		"id": "f947823bf379d0c1de2c736965f51c338faa2e51",
		"date": "2012-11-15 13:13:07",
		"author": "jrburke",
		"time": 313,
		"parents": [
			["6ed22833536086a67af0a05d860a22833b7e09fc", 312, 1]
		],
		"login": "jrburke"
	}]
}