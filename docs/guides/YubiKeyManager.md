---
id: YubiKeyManager
title: YubiKey Corrupt Key Removal Ubuntu 20.04
---

<i>30 January, 2022, Luke Reynolds</i><br/>
<i>Difficulty: Easy</i>

<br/><br/>

YubiKey manager can be used to configure the FIDO2, OTP, and PIV functionality of your YubiKey hardware authentication device. In this case we will be using it to remove a corrupted key from the YubiKey device. You can install the utility with the following command.

<code>sudo apt install yubikey-manager</code>

<br/>

Once the utility is installed plug in your YubiKey device and run the following command to list the current keys on the device.

<code>ykman oath list</code>

<br/>

Find the corrupted key in the list (usually the last one) and delete it by replacing value with the record to be removed. Once the corrupted key is removed the device should function as normal.

<code>ykman oath delete value</code>