<?php

/**
 * @file plugins/themes/lscTheme/LscThemePlugin.php
 *
 * Copyright (c) 2026
 * Distributed under the GNU GPL v3.
 *
 * @class LscThemePlugin
 * @brief Child theme inspired by Literary Studies Conference (lscusd.id) for OJS 3.5+
 */

namespace APP\plugins\themes\lscTheme;

use PKP\plugins\ThemePlugin;

class LscThemePlugin extends ThemePlugin
{
	/**
	 * Initialize styles, scripts, fonts, and theme options.
	 * Only runs when this theme is active.
	 */
	public function init()
	{
		$this->setParent('defaultthemeplugin');

		// Extra option on top of Default Theme options
		$this->addOption('accentColour', 'FieldColor', [
			'label' => __('plugins.themes.lscTheme.option.accentColour.label'),
			'description' => __('plugins.themes.lscTheme.option.accentColour.description'),
			'default' => '#993300',
		]);

		// Typography: Raleway (headings/nav) + Open Sans (body) — matching LSC
		$this->addStyle(
			'lscFonts',
			'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Raleway:ital,wght@0,500;0,600;0,700;1,500&display=swap',
			['baseUrl' => '']
		);

		$accentColour = $this->getOption('accentColour') ?: '#993300';
		if (!preg_match('/^#[0-9a-fA-F]{1,6}$/', $accentColour)) {
			$accentColour = '#993300';
		}

		// Override default theme LESS variables + add LSC layout styles
		$this->modifyStyle('stylesheet', [
			'addLess' => ['styles/colors.less', 'styles/lsc.less'],
			'addLessVariables' => '@lsc-accent: ' . $accentColour . ';',
		]);

		$this->addScript('lsc', 'js/main.js');
	}

	/**
	 * @copydoc Plugin::getDisplayName()
	 */
	public function getDisplayName()
	{
		return __('plugins.themes.lscTheme.name');
	}

	/**
	 * @copydoc Plugin::getDescription()
	 */
	public function getDescription()
	{
		return __('plugins.themes.lscTheme.description');
	}

	/**
	 * Validate colour option before saving.
	 *
	 * @param string $name
	 * @param mixed $value
	 * @param int|null $contextId
	 */
	public function saveOption($name, $value, $contextId = null)
	{
		if ($name === 'accentColour' && !preg_match('/^#[0-9a-fA-F]{1,6}$/', (string) $value)) {
			$value = null;
		}

		parent::saveOption($name, $value, $contextId);
	}
}

if (!PKP_STRICT_MODE) {
	class_alias('\APP\plugins\themes\lscTheme\LscThemePlugin', '\LscThemePlugin');
}
