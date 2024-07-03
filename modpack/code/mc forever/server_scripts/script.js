// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')
///projecte removeemc
onEvent('recipes', event => {
	// Change recipes here

	//thermal remove
	event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
	event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
	event.remove({id:"thermal:fire_charge/electrum_ingot_2"})
	event.remove({id:'thermal:fire_charge/invar_ingot_3'})
	event.remove({id:'thermal:fire_charge/signalum_ingot_4'})
	event.remove({id: "thermal:fire_charge/obsidian_glass_2"})
	event.remove({id: "thermal:fire_charge/lumium_glass_2"})
	event.remove({id: "thermal:fire_charge/lumium_ingot_2"})
	event.remove({id:"thermal:fire_charge/enderium_glass_2"})
	event.remove({id:"thermal:fire_charge/signalum_glass_2"})
	event.remove({id:"thermal:fire_charge/enderium_ingot_2"})
	
	//create remove
	event.remove({id:"create:crafting/kinetics/mechanical_press"})
	event.remove({id:"create:crafting/kinetics/whisk"})
	//create add
	event.shaped('create:mechanical_press', [
		' G ',
		' K ',
		' B '
	], {
		G:"create:shaft",
		K:"create:andesite_casing",
		B:'immersiveengineering:plate_steel'
	})
	event.shaped('create:whisk', [
		' B ',
		'GHG',
		'GGG'
	], {
		B:'minecraft:stone_button',
		H:'create:brass_sheet',
		G:'immersiveengineering:plate_steel'
	})
	
	//kubejs add
	event.shapeless(
		Item.of("kubejs:slag_dust",4),
		[
			'immersiveengineering:slag'
		]
	)
})
onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	
	// event.remove({id:'thermal:fire_charge/sonstantan_ingot_2'})

})
