<?php
/**
*
* @package phpBB Sitemaker [English]
 * @copyright (c) 2013 Daniel A. (blitze)
* @license http://opensource.org/licenses/gpl-license.php GNU Public License
*
*/

/**
* DO NOT CHANGE
*/
if (!defined('IN_PHPBB'))
{
	exit;
}

if (empty($lang) || !is_array($lang))
{
	$lang = array();
}

// DEVELOPERS PLEASE NOTE
//
// All language files should use UTF-8 as their encoding and the files must not contain a BOM.
//
// Placeholders can now contain order information, e.g. instead of
// 'Page %s of %s' you can (and should) write 'Page %1$s of %2$s', this allows
// translators to re-order the output of data while ensuring it remains correct
//
// You do not need this where single placeholders are used, e.g. 'Message %d' is fine
// equally where a string contains only two placeholders which are used to wrap text
// in a url you again do not need to specify an order e.g., 'Click %sHERE%s' is fine
//
// Some characters you may want to copy&paste:
// ’ » “ ” …
//

$lang = array_merge($lang, array(
	// Admin Permissions
	'ACL_A_SM_SETTINGS'			=> 'Может управлять настройками Sitemaker',
	'ACL_A_SM_MANAGE_BLOCKS'	=> 'Управление блоками Sitemaker',
	'ACL_A_SM_MANAGE_MENUS'		=> 'Позволяет управлять меню Sitemaker',
	'ACL_A_SM_FILEMANAGER'		=> 'Может просматривать/управлять папками других пользователей в файловом менеджере',

	// User Permissions
	'ACL_U_SM_FILEMANAGER'		=> 'Может использовать файловый менеджер',
));
